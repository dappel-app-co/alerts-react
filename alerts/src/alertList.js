import React, { Component } from 'react';
import Alert from './alert'

export default class AlertList extends Component {
    constructor(props) {
        super(props);

        this.alerts = this.props.alerts.map(al => <Alert alert={al}/>)
    }

    render() {
        return (<ul>
            {this.alerts}
        </ul>);
    }

}    