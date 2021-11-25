import React from "react";
import {Card, Image, Button} from "react-bootstrap"
import {numberWithCommas} from "../utils/utils"


const Accessoris = ({ accessoris }) => {
   return (
    <Card className="m-4"  >
      <Image
        style= {{widht:'15rem'}}
        src={
          "assets/images/" +
          accessoris.gambar
        }fluid thumbnail
      />
      <Card.Body>
        <Card.Title>{accessoris.nama}</Card.Title>
            <Card.Text>Rp.{numberWithCommas(accessoris.harga)}</Card.Text>
            <Button variant="primary" href={"/specsAcc/" + accessoris.id}>Specs</Button>
      </Card.Body>
    </Card>
   );
}

export default Accessoris;