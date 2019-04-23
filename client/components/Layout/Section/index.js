import React from 'react';

const Section = ({classname, children}) =>{
  return (
    <div className={classname}>
      <div className="container-fluid">
        {children}
      </div>
    </div>
  )
}

export default Section;
