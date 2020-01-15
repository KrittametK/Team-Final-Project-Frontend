import React, { Component } from 'react'
import { Table, Tag, Popconfirm, message, Icon, Row, Modal, Input } from "antd";
import style from "../pages/Admin.module.css";

const columns = [
    {
        title: "Id",
        dataIndex: "Id",
        key: "Id",
        render: text => <a>{text}</a>
    },
    {
        title: "Service-Type",
        key: "Service-Type",
        dataIndex: "tags",
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = "blue";
                    if (tag === "SITTING") {
                        color = "brown";
                    } else if (tag === "OVERNIGHT") {
                        color = "purple"
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
                <span>
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
        )

    }

];

const data = [
    {
        key: "1",
        Id: "1",
        tags: ["WALKING"]
    },
    {
        key: "2",
        Id: "2",
        tags: ["SITTING"]
    },
    {
        key: "3",
        Id: "3",
        tags: ["OVERNIGHT"]
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

export class ServiceManagement extends Component {
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
                            title="Create Service"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Input
                                placeholder="Service-Type"
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
export default ServiceManagement
