import React, { Component } from 'react';
import './index.scss';

const Title = ({month}) =>{
  return(
    <div className="header__elements-title">
      {month && <h2 className="header__elements-title--month">
        {month.display}
      </h2>}
    </div>
  )
}

export default Title;
