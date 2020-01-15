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
        tags: ["CAT"]
    },
    {
        key: "2",
        Id: "2",
        tags: ["DOG"]
    },
    {
        key: "3",
        Id: "3",
        tags: ["CAT"]
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

export class PetManagement extends Component {
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
                            title="Create Pet"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Input
                                placeholder="Pet-Type"
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
export default PetManagement
