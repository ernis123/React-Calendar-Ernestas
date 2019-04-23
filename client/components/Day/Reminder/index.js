import React from "react";
import "./index.scss";

const reminder = ({reminder,handleDeleteReminder,handleSetEdit}) => (
  <div className="reminder">
    <div className="reminder__container" style={{ background: reminder.color }}>
      <div className="reminder__container-body">
        <strong>{reminder.description}</strong>
        <time>{reminder.time}</time>
      </div>
      <div className="reminder__container-actions">
        <div className="reminder__container-actions--button" onClick={() => handleDeleteReminder(reminder.id)}>
          <div className="delete" />
        </div>
        <div className="reminder__container-actions--button" onClick={() => handleSetEdit(reminder)}>
          <div className="update" />
        </div>
      </div>
    </div>
  </div>
);

export default reminder;
