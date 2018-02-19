import React, {Component} from 'react';

const Alert = props => (
        <article>
            <p>{props.alert.name}</p>
            <span>{props.alert.description}</span>    
        </article>
)

export default Alert;