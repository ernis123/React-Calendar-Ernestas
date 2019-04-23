import * as actionTypes from "./types";

 const createReminder = payload => {
  return dispatch => {
    dispatch(createReminderAction(payload));
  };
};

 const updateReminder = payload => {
  return dispatch => {
    dispatch(updateReminderAction(payload));
  };
};

const deleteReminder = (date, id) => {
  return dispatch => {
    dispatch(deleteReminderAction(date, id));
  };
};

const createReminderAction = reminder => {
  return {
    type: actionTypes.CREATE_REMINDER,
    reminder: reminder
  };
};

const updateReminderAction = reminder => {
  return {
    type: actionTypes.UPDATE_REMINDER,
    reminder: reminder
  };
};

const deleteReminderAction = (date, id) => {
  return {
    type: actionTypes.DELETE_REMINDER,
    date: date,
    id: id
  };
};

export default {
  createReminder,
  updateReminder,
  deleteReminder
}
