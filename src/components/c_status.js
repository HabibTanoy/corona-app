import React, { Component } from 'react';
import './main.css';

const CoronaStatus = props => {
    return(
        <div>
            <h5 className="font-weight-bold">{props.tag_text}</h5>
            <h5 className="font-weight-normal">{props.case}</h5>
        </div>
    )
}
 
export default CoronaStatus