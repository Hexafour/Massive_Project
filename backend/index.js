const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;
const secretKey = "your_jwt_secret_key"; // Ubah ini menjadi kunci rahasia yang aman
app.use(cors());
app.use(bodyParser.json());

// Create connection to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_app",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("MySQL Connected...");
});

// Middleware untuk memverifikasi token JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

// Register user
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Name, email, and password are required");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).send("Internal server error");
      }
      res.send("User registered");
    });
  } catch (err) {
    console.error("Error hashing password:", err);
    res.status(500).send("Internal server error");
  }
});

// Login user
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Error selecting user:", err);
      return res.status(500).send("Internal server error");
    }
    if (results.length === 0) {
      return res.status(400).send("Email or password is wrong");
    }

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Email or password is wrong");
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      secretKey,
      { expiresIn: "1h" }
    );
    res
      .header("authorization", token)
      .send({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
  });
});

// Example of a protected route
app.get("/protected", verifyToken, (req, res) => {
  res.send("This is a protected route");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
