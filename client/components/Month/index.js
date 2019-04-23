import React,{Component} from "react";
import {connect} from 'react-redux';

import Day from "../../components/Day";

import moment from "moment";
import "./index.scss";

class Month extends React.Component {
  state = {
    editingDay: undefined
  }

  handleSetEditDay = day => {
    this.setState({
      editingDay: day
    });
  }

  renderHeader = () => {
    const headers = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return headers.map((header, i) => {
      return (<div className="month__elements-header--day" key={i}><h1>{header}</h1></div>)
    })
  }

  createDays = (days) => {
    const {currentMonth} = this.props;
    const daysArray = [];
    const props = {
      editingDay: this.state.editingDay,
      handleSetEditDay: this.handleSetEditDay
    };

    for (let i = 1; i <= days; i++) {
      let date = `${currentMonth.name}-${("0" + i).slice(-2)}`;
      props["date"] = date;
      props["day"] = i;

      if(i === 1){
        const left = (14.28 * (moment(currentMonth.name).startOf('month').day() - 1));
        props["style"] = {marginLeft: `${left}%`};
      }else{
        props["style"] = null;
      }

      if(i == moment().date() && moment(currentMonth.name).format('YYYY-MM') === moment().format('YYYY-MM')){
        props["active"] = true;
      }else{
        props["active"] = false;
      }

      daysArray.push(<Day key={i} {...props} />);
    }
    return daysArray;
  }
  renderDays = (days) =>{
    return this.createDays(days)
  }

  render() {
    const {currentMonth} = this.props;
    return (
      <div className="month">
        <div className="month__container">
          <div className="month__elements">
            <div className="month__elements-header">
              {this.renderHeader()}
            </div>
            <div className="month__elements-month">
              {currentMonth && this.renderDays(currentMonth.days)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMonth: state.month.currentMonth,
})

export default connect(mapStateToProps,null)(Month);
