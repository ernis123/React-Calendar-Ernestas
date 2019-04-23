import React, { Component } from 'react';
import './index.scss';

const AddButton = ({click}) =>{
  return(
    <div onClick={()=>{click()}} className="add">
      <div className="add__container">
        <div className="add__container-button">
        </div>
      </div>
    </div>
  )
}

export default AddButton;
