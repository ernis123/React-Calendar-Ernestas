import React from 'react';

const Column = ({col, children, expand}) =>{
  const style = expand ? {
    height: "100vh",
    width: '100%'
  } :
  {
    height: "100%",
    width: '100%'
  };
  return (
    <div style={style} className={col}>
      {children}
    </div>
  )
}

export default Column;
