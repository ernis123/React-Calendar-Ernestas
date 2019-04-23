import React from 'react';

const FlexContainer = ({column,children: child}) =>{
  const style = column ? {
    height: "100%",
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  } :
  {
    height: "100%",
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } 
  return (
    <div style={style}>
      {child}
    </div>
  )
}

export default FlexContainer;
