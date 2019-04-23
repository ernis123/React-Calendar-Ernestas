import * as actionTypes from './types';

const openMenu = () => {
  return dispatch => {
    dispatch(animationStart())
    dispatch(open())
  }
}

const open = ()=>{
  return{
    type: actionTypes.MENU_OPEN
  }
}

const close = ()=>{
  return{
    type: actionTypes.MENU_CLOSE
  }
}

const closeMenu = () => {
  return dispatch => {
    dispatch(animationStart())
    dispatch(close())
  }
}

const animationStart = ()=>{
  return {
    type: actionTypes.MENU_ANIMATING_START
  }
}

export default {
  openMenu,
  closeMenu,
}
