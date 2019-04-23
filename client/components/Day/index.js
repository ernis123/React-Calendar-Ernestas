import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import actions from "./actions";
import Aux from 'components/Aux';
import AddButton from "./Button";
import ReminderForm from "./ReminderForm";
import Reminder from "./Reminder";
import _sortBy from "lodash/sortBy";
import "./index.scss";

class Day extends React.Component {
  state = {
    editReminder: {
      id: null,
      time: null,
      description: null,
      color: this.props.color
    }
  };

  handleSetColor = data => {
    this.setState({
      editReminder: {
        ...this.state.editReminder,
        color: data.color
      }
    });
  };

  handleSetEdit = reminder => {
    this.props.handleSetEditDay(this.props.day);

    this.setState({
      editReminder: {
        ...this.state.editReminder,
        ...reminder
      }
    });
  };

  handleCreateUpdateReminder = (e, update) => {
    e.preventDefault();

    const form = e.target;
    const description = form.querySelector(".description").value.trim();

    if (description.length) {
      const payload = {
        date: this.props.date,
        time: form.querySelector(".rc-time-picker-input").value,
        description: description,
        color: this.state.editReminder.color || this.props.color
      };

      if (update.id) {
        payload["id"] = update.id;
        this.props.updateReminder(payload);
      } else {
        this.props.createReminder(payload);
      }

      this.props.handleSetEditDay(null);
      this.setState({ editReminder: {} });
    }
  };

  handleDeleteReminder = id => {
    this.props.deleteReminder(this.props.date, id);
  };

  render() {
    const {active,style,date,day,editingDay,color} = this.props;
    const reminders =
      _sortBy(this.props.reminders[this.props.date], "time") || [];
    const content = editingDay === day ? (
            <div className={classNames('month__elements-month--day',{'active': active})} style={style}>
              <ReminderForm
                reminder={this.state.editReminder}
                handleSetColor={this.handleSetColor}
                handleSetEditDay={this.props.handleSetEditDay}
                handleCreateUpdateReminder={this.handleCreateUpdateReminder}
                defaultColor={color}
              />
            </div>
            ) : (
              <Aux>
                <div className={classNames('month__elements-month--day',{'active': active})} style={style}>
                  <h1 className="title">{day}</h1>
                  <AddButton click={() => this.props.handleSetEditDay(this.props.day)} />
                  {reminders.length
                    ?
                    <div className="reminders">
                      {reminders.slice(0,4).map((reminder, i) => {
                          return (
                            <Reminder
                              key={i}
                              reminder={reminder}
                              handleSetEdit={this.handleSetEdit}
                              handleDeleteReminder={this.handleDeleteReminder}
                            />
                          );
                        })}
                      </div>
                    : null}
                </div>
              </Aux>
            )
    return (
      <Aux>
        {content}
      </Aux>
    );
  }
}

Day.defaultProps = {
  color: '#373737'
}

const mapStateToProps = state => ({
    reminders: state.reminders
})

const mapDispatchToProps = {
    createReminder: actions.createReminder,
    updateReminder: actions.updateReminder,
    deleteReminder: actions.deleteReminder
};

export default connect(mapStateToProps,mapDispatchToProps)(Day);
