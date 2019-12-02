import React, { Component } from 'react'
import Cards from './Cards'

class agCards extends Component {
    constructor(props) {
        super (props)
    }
    render(){
        return (
            <ul>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </ul>
            
        )
    }
}

export default agCards