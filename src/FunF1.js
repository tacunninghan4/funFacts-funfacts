import React, { Component } from "react";
import Home from "./Home.js";
import Photo from './photo.jfif';

class FunF1 extends Component {
  render() {
    return (
      <div  className="container">
      <div className="Tornado">
        <div>Topic: size</div>
        <h4 className="center">Funf1</h4>
        <ol>
        <li>
         <p> Tornadoes are measured using the Fujita Scale (or F-scale), ranging
          from F0 to F5, with F5 being the strongest and most destructive.
        </p>
        </li>
        
        <li>
        <p>
          The duration of tornadoes, and the distance they travel, varies. Most
          last less than ten minutes and travel five to ten kilometres before
          disappearing.{" "}
        </p>
     </li> 
     </ol>
     <img src={Photo} />
      </div>
      </div>
    );
  }
}
export default FunF1;
