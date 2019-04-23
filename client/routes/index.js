import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Calendar from 'pages/Calendar';

class Routes extends Component{
  render(){
    return(
          <main className="content">
              <Switch>
                <Route exact path="/" component={Calendar} />
              </Switch>
          </main>
    )
  }
}

export default Routes;
