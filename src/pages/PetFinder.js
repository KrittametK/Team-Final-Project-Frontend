import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Step from '../components/Step'


export class PetFinder extends Component {

state={
    current:0,

}


    render() {
        return (
            <div>
                <NavBar />
                <Step />
            </div>
        )
    }
}

export default PetFinder
