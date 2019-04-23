import axios from 'axios';
import * as actionTypes from './types';

const setMonths = (months) => {
  return {
    type: actionTypes.SET_MONTH,
    payload:{
      currentMonth: months.currentMonth,
    }
  }
}

export default {
  setMonths
}
