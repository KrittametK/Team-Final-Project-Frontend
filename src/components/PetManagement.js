import React, { Component } from 'react'
import { Table, Tag, Popconfirm, message, Icon, Row, Modal, Input } from "antd";
import style from "../pages/Admin.module.css";
import Axios from "axios"



function confirm(e) {
    console.log(e);
    Axios.delete("http://localhost:8080/deleteanimal", {
        id: this.state.deleteId
    }).then(result => {
        console.log(result)
        message.success("Delete sucess");
    }).catch(err => {
        console.log({ message: err })
    })
    message.success("Delete sucess");
}

function cancel(e) {
    console.log(e);
    message.error("Cancle");
}

export class PetManagement extends Component {
    state = {
        visible: false,
        petType: "",
        imgurl: "",
        deleteId: "",
        allanimal: []
    };

    componentDidMount = () => {
        Axios.get("http://localhost:8080/getallanimal")
            .then(result => {
                this.setState({ allanimal: result.data })
                console.log("refresh admin/user")
            }).catch(err => {
                console.log(err)
            })
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        console.log(e);
        Axios.post("http://localhost:8080/addanimal", {
            animal: this.state.petType,
            imganimal_url: this.state.imgurl
        }).then(result => {
            console.log(result)
            this.setState({
                visiblecreate: false
            });
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
            visible: false
        });
    };

    render() {

        const columns = [
            {
                title: "Id",
                dataIndex: "Id",
                key: "Id",
                render: text => <a>{text}</a>
            },
            {
                title: "Animal-Type",
                key: "Animal-Type",
                dataIndex: "tags",
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = "yellow";
                            if (tag === "CAT") {
                                color = "pink";
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
                Id: "1",
                tags: ["CAT"]
            },
            {
                key: "2",
                Id: "2",
                tags: ["DOG"]
            }
        ];
        return (
            <div>
                <Row className={style.adminview}>
                    <span>
                        <Icon type="plus-circle" onClick={this.showModal} />
                        <Modal
                            title="Create Pet"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Input
                                placeholder="Pet-Type"
                                className={style.createadminmodal}
                                onChange={e => this.setState({ petType: e.target.value })}
                            />

                            <Input
                                placeholder="Pet-Image"
                                className={style.createadminmodal}
                                onChange={e => this.setState({ imgurl: e.target.value })}
                            />
                        </Modal>
                    </span>
                </Row>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}
export default PetManagement
