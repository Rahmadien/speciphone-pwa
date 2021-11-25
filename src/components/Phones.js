import React from "react";
import { ListGroup,  Card } from "react-bootstrap";


const Phones = ({ product }) => {
  console.log("assets/images/" +
  product.gambar)
  return (
    <Card bg="dark" text ="white" className ="m-3">
    <Card.Body>
      <Card.Title>{product.nama}</Card.Title>
      <Card.Text>
        {product.launch}
      </Card.Text>
    </Card.Body>
    <ListGroup variant="flush" >
  <ListGroup.Item variant="dark">{product.network}</ListGroup.Item>
  <ListGroup.Item variant="dark">{product.body}</ListGroup.Item>
  <ListGroup.Item variant="dark">{product.processor}</ListGroup.Item>
  <ListGroup.Item variant="dark">{product.memory}</ListGroup.Item>
  <ListGroup.Item variant="dark">{product.maincamera}</ListGroup.Item>
  <ListGroup.Item variant="dark">{product.frontcamera}</ListGroup.Item>
    </ListGroup>
  </Card>
  );
};

export default Phones;