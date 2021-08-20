import React from 'react'
import Photo from './photo.jfif';
import OIP from './OIP.jfif';
import snow from './snow.jfif';
import ATMOS from './ATMOS (1).jfif';

const Home = () => {
    return (
       
       
       <div>
        
        <div className="jumbotron jumbotron-fluid bg-info text-white" >
          
          <div className="container text-center">
          
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css'></link><img src={ATMOS} />
          </div>
            
            
            
            
             
           
            <h1 className="display-1">Fun Facts about Weather</h1>
            <p className="lead">Wind. Snow. Rain.</p>
          
        
       </div>
        
        
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <img src={Photo} />
                <div className="card-body">
                  <h3 className="card-title">
                    <a href='/FunF1'>Tornado's</a>
                  </h3>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <img src={OIP} />
                <div className="card-body">
                  <h3 className="card-title">
                  <a href='/FunF2'>Hurrican's</a></h3>
                  
                
                  <p>
                    
                  </p>
                </div>
              </div>

            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <img src={snow} />
                <div className="card-body">
                  <h3 className="card-title">
                  <a href='/FunF3'>Blizzard's</a>
                  </h3>
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
