import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Aux from 'components/Aux';
import Title from './Title';
import {RightArrow,LeftArrow} from './Button';

import './index.scss';

class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {currentMonth, next, previous} = this.props;
    return (
      <Aux>
        <div className="header">
          <div className="header__container">
            <LeftArrow month={moment(currentMonth.name).subtract(1,"M").format('YYYY-MM')} click={previous}/>
            <Title month={currentMonth} />
            <RightArrow month={moment(currentMonth.name).add(1,"M").format('YYYY-MM')} click={next}/>
          </div>
        </div>
      </Aux>
    )
  }
}

Header.defaultProps = {
  currentMonth: {
    name: moment().format('YYYY-MM')
  }
}

const mapStateToProps = (state) => ({
  currentMonth: state.month.currentMonth,
})

export default connect(mapStateToProps,null)(Header);
