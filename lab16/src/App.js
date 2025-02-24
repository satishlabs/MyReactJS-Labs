
import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LeadsList from './components/LeadsList';

class App extends Component{
  render(){
    return(
      <div>
        <Header mybrand="Lead Manager"/>
        <LeadsList/>
      </div>
    )
  }

}

export default App;
