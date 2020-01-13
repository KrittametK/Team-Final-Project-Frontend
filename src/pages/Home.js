import React, { Component } from "react";
import { Row, Col } from "antd";
// import NavBar from '../components/NavBar'
import Homepage from "../components/Homepage";

export class Home extends Component {
  render() {
    return (
      <Row type="flex" justify="class">
        {/* <NavBar /> */}
        <Col>
          <Homepage />
        </Col>{" "}
      </Row>
    );
  }
}

export default Home;
