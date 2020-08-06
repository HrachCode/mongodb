import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './spiner.css';

export default class Spiner extends React.Component {
 //other logic
   render() {
    return(
     <div className = 'load'>
         <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={118000} //3 secs

     />
     </div>
    );
   }
}
