import React, { Component } from "react";
import { Table, Tag, Popconfirm, message, Icon, Row, Modal, Input } from "antd";
import style from "../pages/Admin.module.css";

const columns = [
  {
    title: "e-mail",
    dataIndex: "email",
    key: "email",
    render: text => <a>{text}</a>
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = "geekblue";
          if (tag === "USER") {
            color = "green";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Popconfirm
          title="Are you sure delete this Admin?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">
            <Icon type="delete" style={{ fontSize: "20px" }} />
          </a>
        </Popconfirm>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    email: "hok@admin.com",
    name: "John Brown",
    tags: ["USER"]
  },
  {
    key: "2",
    email: "bas@admin.com",
    name: "Jim Green",
    tags: ["ADMIN"]
  },
  {
    key: "3",
    email: "admin@admin.com",
    name: "Joe Black",
    tags: ["ADMIN"]
  }
];

function confirm(e) {
  console.log(e);
  message.success("Delete sucess");
}

function cancel(e) {
  console.log(e);
  message.error("Cancle");
}

export class ViewAdmin extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Row className={style.adminview}>
          <span>
            <Icon type="plus-circle" onClick={this.showModal} />
            <Modal
              title="Create Admin"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Input
                placeholder="Admin e-mail"
                className={style.createadminmodal}
              />
              <Input
                placeholder="Password"
                className={style.createadminmodal}
              />
              <Input
                placeholder="Firstname"
                className={style.createadminmodal}
              />
              <Input
                placeholder="Lastname"
                className={style.createadminmodal}
              />
            </Modal>
          </span>
        </Row>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default ViewAdmin;
