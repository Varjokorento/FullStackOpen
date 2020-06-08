import React, { Component } from 'react'

export default class Total extends Component {
    render() {
        return (
            <div>
                <p>Number of exercises {this.props.total}</p>
            </div>
        )
    }
}
