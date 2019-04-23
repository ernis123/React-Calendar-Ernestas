import React, { Component } from 'react';
import './index.scss';

const RightArrow = ({click,month}) =>{
  return(
    <div onClick={()=>{click(month)}} style={{justifyContent: 'flex-start'}} className="header__elements-button">
      <div className="holder">
        <div className="header__elements-button--right">
        </div>
      </div>
    </div>
  )
}

export default RightArrow;
