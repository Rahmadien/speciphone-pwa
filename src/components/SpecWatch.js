import React from "react";
import { ListGroup,  Card } from "react-bootstrap";


const SpecWatch = ({ accessoris }) => {
  console.log("assets/images/" +
  accessoris.gambar)
  return (
    <Card bg="dark" text ="white" className ="m-3">
    <Card.Body>
      <Card.Title>{accessoris.nama}</Card.Title>
      <Card.Text>
        {accessoris.launch}
      </Card.Text>
    </Card.Body>
    <ListGroup variant="flush" >
  <ListGroup.Item variant="dark">{accessoris.display}</ListGroup.Item>
  <ListGroup.Item variant="dark">{accessoris.body}</ListGroup.Item>
  <ListGroup.Item variant="dark">{accessoris.processor}</ListGroup.Item>
  <ListGroup.Item variant="dark">{accessoris.memory}</ListGroup.Item>
    </ListGroup>
  </Card>
  );
};

export default SpecWatch;