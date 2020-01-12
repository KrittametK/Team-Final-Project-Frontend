import React, { Component } from 'react';
import { Modal, Button, Steps, message, Input } from 'antd';

const { Step } = Steps;


class SearchCare extends Component {
    state = { 
      // modal
      visible: false,
      // step
      current: 0,
      test:''
    };
  
    // model
    showModal = () => {
      this.setState({
        visible: true,
      });
    };  
    handleOk = e => {
      // console.log(e);
      this.setState({
        visible: false,
      });
    };  
    handleCancel = e => {
      // console.log(e);
      this.setState({
        visible: false,
      });
    };

    // step
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
  
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }

    // === start here ===
  
    render() {
      // step  
      const { current } = this.state;

      const steps = [
        {
          title: 'First',
          content: <Input onChange={e => this.setState({ test: e.target.value },()=>console.log(this.state.test))}></Input>,
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
      ];

      
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>
            Need Care
          </Button>
          <Modal
            title="Need Care"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >

            <div>
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className="steps-content">{steps[current].content}</div>
              <div className="steps-action">
                {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => this.next()}>
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                )}
              </div>
            </div>

          </Modal>
        </div>
      );
    }
}


export default SearchCare;
