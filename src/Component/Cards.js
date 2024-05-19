import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Cards({imgsrc, title}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src = {imgsrc} />
        <Card.Body>
          <Card.Title className='text-dark'>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;