import React, { Component } from 'react';

const Date = (props) => {
    return(
        <div className="text-uppercase date_color">
            <strong>{props.date}</strong>
        </div>
    );
}

export default Date;