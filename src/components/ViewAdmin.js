import React, { Component } from "react";
import { Table, Tag, Popconfirm, message, Icon, Row, Modal, Input, notification, Form } from "antd";
import style from "../pages/Admin.module.css";
import Axios from "axios"

function confirm(e) {
  console.log(e);
  Axios.delete("http://localhost:8080/deleteadmin", {
    id: this.state.deleteId
  }).then(result => {
    console.log(result)
    message.success("Delete sucess");
  }).catch(err => {
    console.log({ message: err })
  })
}

function cancel(e) {
  console.log(e);
  message.error("Cancle");
}

const notiCreate = () => {
  notification.open({
    message: 'Sucess',
    description:
      'Created User Admin Sucess',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
export class ViewAdmin extends Component {

  state = {
    visiblecreate: false,
    visibleedit: false,
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    district: "",
    province: "",
    deleteId: "",
    editId: "",
    user: []
  };



  componentDidMount = () => {
    Axios.get("http://localhost:8080/getalluser")
      .then(result => {
        this.setState({ user: result.data })
        console.log("refresh admin/user")
      }).catch(err => {
        console.log(err)
      })
  }

  showModal = () => {
    this.setState({
      visiblecreate: true
    });
  };

  showModall = () => {
    this.setState({
      visibleedit: true
    });
  };

  handlecreate = e => {
    console.log(e);
    Axios.post("http://localhost:8080/registeradmin", {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    }).then(result => {
      console.log(result)
      this.setState({
        visiblecreate: false
      });
      notiCreate()

    }).catch(err => {
      console.log({ message: err })
    })
    this.setState({
      visible: false
    });
  };

  handleedit = e => {
    console.log(e);
    Axios.put("http://localhost:8080/edituser", {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      district: this.state.district,
      province: this.state.province
    }).then(result => {
      console.log(result)
    }).catch(err => {
      console.log({ message: err })
    })
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visiblecreate: false,
      visibleedit: false
    });
  };



  render() {
    console.log(this.state.user)
    let columns = [
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
        render: object => {
          let role = object.tags[0];
          console.log(role);
          if (role == "USER") {
            return (
              <span>
                <span onClick={this.showModall}>
                  <a href="#">
                    <Icon type="edit" style={{ fontSize: "20px" }} />
                  </a>
                </span>
                <Icon type="more" />
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
              </span>
            );
          } else {
            return (
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
            );
          }
        }
      }
    ];

    let data = [
      {
        //key: "1",
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

    return (
      <div>
        <Row className={style.adminview}>
          <span>
            <Icon type="plus-circle" onClick={this.showModal} />

            <Modal
              title="Create Admin"
              visible={this.state.visiblecreate}
              onOk={this.handlecreate}
              onCancel={this.handleCancel}
            >
              <Input
                placeholder="Admin e-mail"
                className={style.createadminmodal}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Input
                placeholder="Password"
                className={style.createadminmodal}
                onChange={e => this.setState({ password: e.target.value })}
              />
              <Input
                placeholder="Firstname"
                className={style.createadminmodal}
                onChange={e => this.setState({ firstname: e.target.value })}
              />
              <Input
                placeholder="Lastname"
                className={style.createadminmodal}
                onChange={e => this.setState({ lastname: e.target.value })}
              />
            </Modal>


            <Modal
              title="Edit User"
              visible={this.state.visibleedit}
              onOk={this.handleedit}
              onCancel={this.handleCancel}
            >
              <Input
                placeholder="firstname"
                className={style.createadminmodal}
                onChange={e => this.setState({ firstname: e.target.value })}
              />
              <Input
                placeholder="lastname"
                className={style.createadminmodal}
                onChange={e => this.setState({ lastname: e.target.value })}
              />
              <Input
                placeholder="phone"
                className={style.createadminmodal}
                onChange={e => this.setState({ phone: e.target.value })}
              />
              <Input
                placeholder="email"
                className={style.createadminmodal}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Input
                placeholder="address"
                className={style.createadminmodal}
                onChange={e => this.setState({ address: e.target.value })}
              />
              <Input
                placeholder="district"
                className={style.createadminmodal}
                onChange={e => this.setState({ district: e.target.value })}
              />
              <Input
                placeholder="province"
                className={style.createadminmodal}
                onChange={e => this.setState({ province: e.target.value })}
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
