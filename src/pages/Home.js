import React, { Fragment, Component } from "react";
import Products from "../components/Products"
import { Row, Container } from "react-bootstrap";


export default class Home extends Component {
  state = {
      products: [],
  }

  componentDidMount() {
      fetch ('https://my-json-server.typicode.com/Rahmadien/speciphone-db/db/')
      .then((res) => res.json())
      .then(json => {
        console.log(json.products)
        this.setState({
          products: json.products
      })
    });
  }

    render() {
      return (
        <div className="mb-4">
          <Container fluid><hr/>
            <h4><strong>List Products</strong></h4>
            <Row className="overflow-auto menu">
              <div>
              {this.state.products&&
                  this.state.products.map(product => {
                      return <Products key = {product.id} product={product} />;
                  }
                  )
              }
              </div>
              </Row>
          </Container>
          </div>
      );
  }
}


