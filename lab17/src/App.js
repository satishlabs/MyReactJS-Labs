
import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LeadsList from './components/LeadsList';
import { MyApplicationData } from './appContext';

class App extends Component{
  render(){
    return(
      <MyApplicationData>
      <div className='App Container'>
        <Header mybrand="Lead Manager"/>
        <LeadsList/>
      </div>
      </MyApplicationData>
    )
  }

}

export default App;
