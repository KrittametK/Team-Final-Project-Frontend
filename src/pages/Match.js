import React, { Component } from 'react';
import './Match.css'
import { Tabs, Calendar } from 'antd';
import 'antd/dist/antd.css'
import { Service } from '../components/Service';

const { TabPane } = Tabs;

class Match extends Component {

  state={
    jobDates: [] // {date: , rate: ,customerId: }
  }

  handleSelectDay = (moment) => {
    let momentFormat = moment.format('L')
    for (let job of this.state.jobDates) {
      if (
        momentFormat.slice(3,5) == job.date.slice(3,5) &&
        momentFormat.slice(0,2) == job.date.slice(0,2) &&
        momentFormat.slice(6) == job.date.slice(6)
      ) {
        return
      }
    }
    let valueService = window.confirm(`Do you want to "Service" on "${momentFormat}"`)   
    if (valueService) {
      let valueRate = window.prompt('Rate: Bath/hour')
      if (valueRate) {
        this.setState({ jobDates: [...this.state.jobDates, 
          { 
            date: momentFormat,
            rate: valueRate,
            customers: []
          }
        ] },
          ()=>console.log(this.state.jobDates)
        )  
      }         
    }
  }

  dateCellRender = (moment) => {

    let filterDay = (jobDates) => {
      let result = jobDates.filter(
        jobDate => jobDate.date.slice(3,5) == moment.date()
      )  
      result = result.filter(
        jobDate => jobDate.date.slice(0,2) == moment.month()+1
      )
      result = result.filter(
        jobDate => jobDate.date.slice(6) == moment.year()
      )
      return result
    }

    return (
      <div>                        
        { filterDay(this.state.jobDates).map(x => 
            <Service />
        )}
      </div>
    );
  }
  getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  }  
  monthCellRender = (value) => {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  render() {
    return (
      <div id='match-container'> 

        <div id='profile-container'>
          <Tabs type="card" style={{border:'0px solid'}}>
            <TabPane tab="My Profile" key="1">
              
            </TabPane>
            <TabPane tab="Pets Profile" key="2">
              
            </TabPane>
            <TabPane tab="Calendar" key="3">
              
            </TabPane>        
          </Tabs>
        </div>

        <div id='job-container'>
          <Tabs type="card" style={{border:'1px solid'}}>
            <TabPane tab="My Jobs" key="1" style={{border:'0px solid', padding:'10px'}}>
              <div style={{border: '1px solid #d9d9d9', borderRadius: 4}}>                  
                <Calendar className='match-calendar'   
                  fullscreen={false}                                    
                  dateCellRender={this.dateCellRender} 
                  monthCellRender={this.monthCellRender}
                  onSelect={ this.handleSelectDay}
                />
              </div>
              {this.state.jobDates.map(job => 
                <div style={{border:'1px solid'}}>{job.date}</div>
              )}
            </TabPane>
            <TabPane tab="Hire" key="2">
              
            </TabPane>       
          </Tabs>
        </div>

      </div>
    );
  }
}

export default Match;
