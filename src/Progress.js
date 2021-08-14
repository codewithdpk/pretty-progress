import React from 'react';
import './style.scss';

const Progress = ({width}) =>{
  return (
   <div className="progress-bar__container">
     <div className="progress-bar__container--filled" style ={{width:`${width}%`}}></div>
   </div>
  );
}

export default Progress;
