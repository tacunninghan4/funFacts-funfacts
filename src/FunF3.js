import React, { Component } from 'react'
import Home from "./Home.js";
import snow from './snow.jfif';


class FunF3 extends Component {
    render() {
        return (
            <div className="container">
            <div className="Blizzard">
              <div>Topic: winter</div>  
              <h4 className="center">FunF3</h4>
           
           <ol>
            <li>
            <p>The first blizzard to be declared a Federal Emergency was in 1977, affecting upstate New York and Southern Ohio. The storm’s accumulation was only about 12 inches over 5 days, but the winds were deadly.</p>
            </li>
            
            <li>
            <p>The Storm of the 20th Century took place in March, 1993. It was iconic for it’s hurricane wind force and massive size. And stretched from Canada to mid-America. The blizzard cause roughly 300 deaths and 10 million power outages.</p>
            </li>
            <img src={snow} />
            </ol>
       </div>
       </div>
    ) 
}
}
export default FunF3