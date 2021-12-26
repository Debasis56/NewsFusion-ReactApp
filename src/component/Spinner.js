import React, { Component } from 'react'
import loading from './loading.gif'
import loading2 from './loading2.gif'


export class Spinner extends Component {

    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src={this.props.mode==="light"? loading : loading2} alt="loading"/>
            </div>
        )
    }
}

export default Spinner
