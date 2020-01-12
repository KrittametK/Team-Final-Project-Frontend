import React, { Component } from 'react';
import './Main.css'
import { Tabs, Calendar } from 'antd';
import 'antd/dist/antd.css'
import Schedule from '../components/Schedule';
import SearchCare from '../components/SearchCare';

const { TabPane } = Tabs;

class Main extends Component {

  state={
    shcedules: [ 
      { id: 1, providerId: null, date:'01/10/2020', rate:500,
        dog: 0, cat: 0, walking: 0, sitting: 0, overnight: 0,
        customers: [
          {status: 'yellow', fromTime: null, toTime: null},
          {status: 'yellow', fromTime: null, toTime: null}
        ]
      },
      { id: 2, providerId: null, date:'01/20/2020', rate:500,
        dog: 0, cat: 0, walking: 0, sitting: 0, overnight: 0, 
        customers: [
          {status: 'yellow', fromTime: null, toTime: null}
        ]
      },
    ]    
  }

  handleSelectDay = (moment) => {
    let momentFormat = moment.format('L')
    for (let shcedule of this.state.shcedules) {
      if (
        momentFormat.slice(3,5) == shcedule.date.slice(3,5) &&
        momentFormat.slice(0,2) == shcedule.date.slice(0,2) &&
        momentFormat.slice(6) == shcedule.date.slice(6)
      ) {
        return
      }
    }
    let valueSchedule = window.confirm(`Do you want to "Service" on "${momentFormat}"`)   
    if (valueSchedule) {
      let valueRate = window.prompt('Rate: Bath/hour')
      if (valueRate) {
        this.setState({ shcedules: [...this.state.shcedules, 
          { 
            date: momentFormat,
            rate: valueRate,
            customers: []
          }
        ] },
          ()=>console.log(this.state.shcedules)
        )  
      }         
    }
  }

  dateCellRender = (moment) => {

    let filterDay = (shcedules) => {
      let result = shcedules.filter(
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
        { filterDay(this.state.shcedules).map(x => 
            <Schedule />
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
      <div id='profile-match-container'> 

        <div id='profile-container'>
          <Tabs type="card" style={{border:'0px solid'}}>
            <TabPane tab="My Profile" key="1">
              
            </TabPane>
            <TabPane tab="Pets Profile" key="2">
              
            </TabPane>   
          </Tabs>
        </div>

        <div id='shcedule-container'>
          <Tabs type="card" style={{border:'1px solid'}}>
            <TabPane tab="My Jobs" key="1" style={{border:'0px solid', padding:'10px'}}>
              <div style={{border: '1px solid #d9d9d9', borderRadius: 4}}>                  
                <Calendar className='shcedule-calendar'   
                  fullscreen={false}                                    
                  dateCellRender={this.dateCellRender} 
                  monthCellRender={this.monthCellRender}
                  onSelect={ this.handleSelectDay}
                />
              </div>
              {this.state.shcedules.map(shcedule => 
                <div style={{border:'1px solid'}}>
                  {shcedule.date}
                  {shcedule.customers.map(x => <div>x</div>)}
                </div>
              )}
            </TabPane>
            <TabPane tab="Hire" key="2" style={{padding:'10px'}}>
                <SearchCare />
            </TabPane>       
          </Tabs>
        </div>

      </div>
    );
  }
}

export default Main;
