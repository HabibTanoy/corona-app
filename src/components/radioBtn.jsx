import React, { Component } from 'react';
import Frame from './Iframe'
import AnotherMap from './AnotherMap';

const RadioBtn = props => {

  function MapOne (props) {
    return(
      <div>
        <Frame />
      </div>
    )
  }

  function anotherMap(props) {
    return(
      <div>
        <AnotherMap />
      </div>
    )
  }
    
  
    return(
        <div>
           <div className="form-check form-check-inline" onClick={MapOne}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
            <label className="form-check-label font-weight-bold" for="inlineRadio1">{props.BtnRadio}</label>
           </div>
           <div className="form-check form-check-inline" onClick={anotherMap}>
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label font-weight-bold" for="inlineRadio2">{props.BtnRadioTwo}</label>
          </div>
        </div>
        
    )
}

export default RadioBtn