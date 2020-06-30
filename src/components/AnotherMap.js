import React, { Component } from 'react';

const AnotherMap = (props) => {
    return(
        <div>
            <iframe className="i_frame" src={props.c_map} id="corona-map" style={{display:"none"}}></iframe>
            <iframe className="i_frame" src={props.Lockdown_map} id="lockdown-map"></iframe>
        </div>
    );
}

export default AnotherMap;