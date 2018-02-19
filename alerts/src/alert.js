import React, { Component } from 'react';

const Alert = props => (
    <article className="w3-card-4 w3-center w3-hover-shadow alert-card">
        <header className="w3-container w3-grey"><h4>{props.alert.name}</h4></header>
        <div className="w3-container" style={{height: 50+'%', padding: 10+'px' }} >
            <img src="favicon.ico" class="w3-left w3-circle" />
            <span>{props.alert.description}</span>
        </div>
        <footer className="w3-block w3-dark-grey alert-footer"> </footer>
    </article>
)

export default Alert;