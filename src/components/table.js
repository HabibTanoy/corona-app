import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

const Mytable = props => {
    return(
        <div>
            <table>
                <tr>
                    <th>
                        <p className="corona_color"></p>
                    </th>
                   <th className="tag_change">{props.firstColor}</th>
                </tr>
                <tr>
                    <th>
                        <p className="lockdown_color mt-2"></p>
                    </th>
                     <th className="pl-3 pb-2">{props.secondColor}</th>
                </tr>
            </table>
        </div>
    );
}

export default Mytable;