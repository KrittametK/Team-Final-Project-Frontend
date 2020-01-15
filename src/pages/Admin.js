import React, { Component } from "react";
import { Row, Icon, Tabs, Select } from "antd";
import style from "./Admin.module.css";
import ViewAdmin from "../components/ViewAdmin";
import PetManagement from "../components/PetManagement";
import ServiceManagement from "../components/ServiceManagement"

const { TabPane } = Tabs;
const { Option } = Select;

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

        {/* <Row>
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
            <PetManagement />
            <ServiceManagement />
          </Col>
        </Row> */}

        <Tabs tabPosition="left">
          <TabPane tab="Admin/User Management" key="1">
            <ViewAdmin />
          </TabPane>
          <TabPane tab="Pet Management" key="2">
            <PetManagement />
          </TabPane>
          <TabPane tab="Service Management" key="3">
            <ServiceManagement />
          </TabPane>
        </Tabs>

      </div>
    );
  }
}

export default Admin;
