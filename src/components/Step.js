import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import style from './Step.module.css'
const{ Step } = Steps;
export class StepOwner extends Component {
    state = {
        steps:[
            {
              title: 'First',
              content: 'First-content',
            },
            {
              title: 'Second',
              content: 'Second-content',
            },
            {
              title: 'Last',
              content: 'Last-content',
            },
          ],
          current: 0,
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    render() {
        const { current} = this.state.current
        return ( 
            <div>
  <Steps current={current}>
          {this.state.steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className={style.stepsContent}>{this.state.steps[this.state.current].content}</div>
        <div className={style.stepsAction}>
          {current < this.state.steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === this.state.steps.length - 1 && (
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
        )
    }
}

export default StepOwner
