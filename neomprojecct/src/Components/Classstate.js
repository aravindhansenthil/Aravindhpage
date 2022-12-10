import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor()
    {
        super()
        this.state={
            name:"Aravindh",
            age:19
        }
    } 
    render() {
        return (
            <>
            <h1> {this.state.name} age is {this.state.age} </h1>   
            </>
        )      
    }     vc 
}

