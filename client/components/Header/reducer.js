import * as actionTypes from './types';

const initialState = {
  open: false,
  animating: false
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      return{
        ...state,
        open: true,
        animating: false
      }
    case actionTypes.MENU_CLOSE:
      return{
        ...state,
        open: false,
        animating: false
      }
    case actionTypes.MENU_ANIMATING_START:
      return{
        ...state,
        animating: true
      }
    default:
      return state;
  }
}

export default reducer
