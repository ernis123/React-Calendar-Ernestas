import React,{Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Header from 'components/Header';
import Aux from 'components/Aux';
import Month from 'components/Month';

import {Row, Section, Column, FlexContainer} from 'components/Layout';

import actions from './actions';

class Calendar extends Component{

  componentDidMount() {
    if (!this.props.currentMonth){
      this.props.set(this.getMonth());
    }
  }

  nextMonth = (thisMonth) => {
    this.props.set(this.getMonth(thisMonth));
  }

  previousMonth = (thisMonth) => {
    this.props.set(this.getMonth(thisMonth));
  }

  getMonth = (thisMonth) => {
    const currentMonth = thisMonth || moment().format("YYYY-MM");
    return {
      currentMonth: {
        name: currentMonth,
        display: moment(currentMonth).format("MMMM YYYY"),
        days: moment(currentMonth).daysInMonth(),
      }
    }
  }

  render(){
    const {currentMonth} = this.props;
    return (
      <Aux>
        <Header next={this.nextMonth} previous={this.previousMonth} />
        <Section classname="month">
          <Row>
            <Column col="col-lg-12">
              <Month />
            </Column>
          </Row>
        </Section>
      </Aux>
    )
  }
}

const mapStateToProps = state => ({
  currentMonth: state.month.currentMonth
})

const mapDispatchToProps = {
  set: actions.setMonths
}

export default connect(mapStateToProps,mapDispatchToProps)(Calendar);
