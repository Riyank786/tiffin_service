import React from 'react'

import Card from 'react-bootstrap/Card';


function Cards(props) {
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img src={props.imgsrc}variant="top" className='img-fluid' />
      <Card.Body>
        <Card.Text><span className='fw-bold '>Item Name:</span>{props.title}</Card.Text>
        <p className='border fw-bold border-danger rounded-pill text-danger bg-warning'>{props.sellerName}</p>
        <Card.Text>
       <span className='fw-bold'>Description:</span> {props.description}
        </Card.Text>
        <Card.Text>
        <span className='fw-bold'>Price:</span>&#8377;{props.price} 
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards