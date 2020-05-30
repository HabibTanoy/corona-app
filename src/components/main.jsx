import React, { Component } from 'react';
import { Row, Col, Form, Image } from 'react-bootstrap';
import './main.css';
import CoronaStatus from './c_status'
import RadioBtn from './radioBtn'
import Mytable from './table'
import Report from './reportBtn'
import Date from './date'
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment'


class MainIndex extends Component {
    state = { 
        logo:'favicon.webp',
        main_tag:"Corona Info",
        c_cases:"Corona Cases",
        a_lockdown:"Lockdown Area",
        Btn_text:"Report Lockdown",
        web:"corona.gov.bd",
        update:"Last update",
        date:moment().format('dddd , MMMM DD, YYYY'),
        link_a:"./whereislockdown.html"
     }
    render() {
        return ( 
            <div>
                <Row>
                   <Col className="map" md={9}>
                       <iframe className="i_frame" src={this.state.link_a} ></iframe>
                   </Col>
                   <Col sm={3}>
                       <Form>
                           <div className="p-2 mt-4">
                               <h3 className="font-weight-bold text_modify">
                                <Image className="m-1" src={this.state.logo} />   
                                {this.state.main_tag} </h3>
                           </div>
                           <div>
                           <CoronaStatus tag_text={"Total Corona Cases"} case={1234} />
                           <CoronaStatus tag_text={"Total Deaths"} case={251} />
                           <CoronaStatus tag_text={"Total Recovered"} case={555} />
                           </div>
                           <br/>
                           <RadioBtn BtnRadio={this.state.c_cases} BtnRadioTwo={this.state.a_lockdown} />
                           <br />
                           <Mytable firstColor={this.state.c_cases} secondColor={this.state.a_lockdown} />
                           <br/>
                           <Report BtnReport={this.state.Btn_text} />
                           <h4>Source</h4>
                           <div className="web_change">
                           <i className="fa fa-angle-right" /> <strong>{this.state.web}</strong>
                           </div>
                           <h5 className="mt-2">{this.state.update}</h5>
                           <Date date={this.state.date} />
                           <br />
                       </Form>
                   </Col>
                </Row>
            </div>
         );
    }
}
 
export default MainIndex;