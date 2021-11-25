import React, {  Component } from "react";
import Accessoris from "../components/Accessoris"
import { Row, Container } from "react-bootstrap";


export default class Watch extends Component {
  state = {
      accessoris: [],
  }

  componentDidMount() {
      fetch ('https://my-json-server.typicode.com/rahmadien/accessoris/db/')
      .then((res) => res.json())
      .then(json => {
        console.log(json.accessoris)
        this.setState({
          accessoris: json.accessoris
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
              {this.state.accessoris&&
                  this.state.accessoris.map(accessoris => {
                      return <Accessoris key = {accessoris.id} accessoris={accessoris} />;
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