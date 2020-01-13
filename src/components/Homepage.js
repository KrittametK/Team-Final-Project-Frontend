import React, { Component } from "react";
import { Row, Col } from "antd";
import "./Homepage.css";

export class Homepage extends Component {
  render() {
    return (
      <Row type="flex" justify="class">
        <Row >
          <Col xs={24} lg={24}>
            Our Services
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Homepage;
