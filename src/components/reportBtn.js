import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

const Report = (props) => {
    const ReportBtn = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdmb0pcUPLlUyR7ZpAjueVTaGnskz3EOkRaIgAKTSYanIv3xQ/viewform");
    }
    return(
        <div className="mb-3">
            <Button variant="dark" onClick={ReportBtn} block>{props.BtnReport}</Button>
        </div>
    );
}

export default Report