import React from "react";
import {Card, Image, Button} from "react-bootstrap"
import {numberWithCommas} from "../utils/utils"


const Products = ({ product }) => {
   return (
    <Card className="m-4"  >
      <Image
        style= {{widht:'15rem'}}
        src={
          "assets/images/" +
          product.gambar
        }fluid thumbnail
      />
      <Card.Body>
        <Card.Title>{product.nama}</Card.Title>
            <Card.Text>Rp.{numberWithCommas(product.harga)}</Card.Text>
        <Button variant="dark" href={"/specs/" + product.id}>Specs</Button>
      </Card.Body>
    </Card>
   );
}

export default Products;