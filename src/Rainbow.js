import React from 'react'

 const Rainbow = (WrappedComponent) => {
    
    const color = ['red', 'blue', 'green', 'yellow','orange' ]
    const randomColor = color[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';
    
    return(props) =>{

    
    return (
        <div className={className}>
         <WrappedComponent {...props} />   
        </div>
   )
 }
}
export default Rainbow