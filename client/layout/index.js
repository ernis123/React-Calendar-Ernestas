import React,{Component} from 'react';
import Routes from '../routes';
import Aux from 'components/Aux';
import {Helmet} from 'react-helmet';

class App extends Component{

  render(){
    return (
      <Aux>
        <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Ernestas Calendar</title>
        </Helmet>
        <Routes />
        </div>
      </Aux>
    )
  }
}

export default App;
