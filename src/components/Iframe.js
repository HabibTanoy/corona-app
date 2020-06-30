import React, { Component } from 'react';

const Frame = props => {
    return(
        <div>
            <iframe className="i_frame" src={props.c_map} id="corona-map" ></iframe>
            <iframe className="i_frame" src={props.Lockdown_map} id="lockdown-map" style={{display:"none"}}></iframe>
        </div>
    );
}


export default Frame;