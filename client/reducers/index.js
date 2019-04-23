import {combineReducers} from 'redux';
import month from 'containers/Calendar/reducer';
import reminders from 'components/Day/reducer';

export default combineReducers({
  month,
  reminders,
})
