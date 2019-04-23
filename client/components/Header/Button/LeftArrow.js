import React, { Component } from 'react';
import './index.scss';

const LeftArrow = ({click,month}) =>{
  return(
    <div onClick={()=>{click(month)}} style={{justifyContent: 'flex-end'}} className="header__elements-button">
      <div className="holder">
        <div className="header__elements-button--left">
        </div>
      </div>
    </div>
  )
}

export default LeftArrow;
