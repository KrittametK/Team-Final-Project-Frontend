import React, { Component } from "react";
import { Row, Col, Icon, Menu } from "antd";
import style from "./Admin.module.css";
import ViewAdmin from "../components/ViewAdmin";
import ViewUser from "../components/ViewUser";
export class Admin extends Component {
  render() {
    return (
      <div>
        <Row className={style.adminnavbar}>
          <span>admin Bear</span>
          <span>|</span>
          <span>
            <Icon type="user" />
          </span>
        </Row>

        <Row>
          <Col span={4}>
            <Menu
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              className={style.adminmenu}
            >
              <Menu.ItemGroup key="g1" title="Admin/User Management">
                <Menu.Item key="1">Admin/User</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Pet Management">
                <Menu.Item key="2">Pet</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g3" title="Service Management">
                <Menu.Item key="3">Service</Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Col>
          <Col span={20}>
            <ViewAdmin />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;
