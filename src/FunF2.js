import React, { Component } from 'react'

import Home from "./Home.js";
import OIP from './OIP.jfif';
class FunF2 extends Component {
    render() {
        return (
            <div className="Hurricane">
               <div>Topic: season</div> 
               <h4 className="center">FunF2</h4>
            <ol>
            
            
            <li>
            <p className='text-primary'>Hurricane season occurs between June and November, when the conditions of forming tropical storms are there: warm seas and humid atmosphere.</p>
           </li>
            <li>
            <p>The word “hurricane” comes from “hurucane”, a Taino Native American word that means “evil spirit of the wind”, which is not surprising.</p>
            </li>
        </ol>
        <img src={OIP} />
        </div>
    )
}
}


export default FunF2