import React from "react";
import TimePicker from "rc-time-picker";
import ColorPicker from "rc-color-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import "rc-color-picker/assets/index.css";
import "./index.scss";

const reminderForm = props => {
  const time = props.reminder.time
    ? moment(props.reminder.time, "HH:mm a")
    : moment()
        .hour(0)
        .minute(0);

  return (
    <div className="form">
      <form
        method="post"
        onSubmit={e => props.handleCreateUpdateReminder(e, props.reminder)}
      >
        <input
          type="text"
          className="description"
          placeholder="Reminder"
          maxLength="30"
          defaultValue={props.reminder.description}
        />

        <TimePicker
          className="time-picker"
          showSecond={false}
          defaultValue={time}
          format="h:mm a"
          use12Hours
          inputReadOnly
        />

        <ColorPicker
          className="color-picker"
          animation="slide-up"
          color={props.reminder.color || props.defaultColor}
          onClose={props.handleSetColor}
        />

        <button className="btn-submit">Submit</button>

        <button
          className="btn-cancel"
          onClick={() => props.handleSetEditDay(null)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default reminderForm;
