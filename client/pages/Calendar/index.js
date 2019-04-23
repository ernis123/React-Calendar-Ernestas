import React,{Component} from 'react';
import {Row, Section, Column, FlexContainer} from 'components/Layout';
import Calendar from 'containers/Calendar';

class CalendarContainer extends Component{
  render(){
    return (
      <Section classname="calendar">
        <Row>
          <Column expand col="col-lg-12">
              <Calendar />
          </Column>
        </Row>
      </Section>
    )
  }
}

export default CalendarContainer;
