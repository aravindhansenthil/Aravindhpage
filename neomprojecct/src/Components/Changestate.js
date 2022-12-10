import React, { component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './backstyle.css'

export default class ChangeState extends Componenet {
    state={ name:""}

    change=(e)=>{this.setState({name:e.target.value})}
    
    render() {
        return (
         <div className='design'>
            <h1 style={{colour:"red"}}> {this.state.name}</h1>
            <input type="text" onChange={this.change}/>
            <h1>{this.state.name}</h1>
            <BrowserRouter></BrowserRouter>
                
            </div>
        )
            
        ]
    }
}