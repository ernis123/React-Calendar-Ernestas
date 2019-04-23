import * as actionTypes from './types';

const initialState = {
  currentMonth: undefined,
}

const reducer = (state = initialState,action) => {
  switch (action.type) {
    case actionTypes.SET_MONTH:
      return{
        ...state,
        currentMonth: action.payload.currentMonth,
      }
    default:
      return state;
  }
}

export default reducer;
