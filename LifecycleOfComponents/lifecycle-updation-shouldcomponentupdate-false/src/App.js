
import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    books: [],
    showBooks: true,
  }

  bookVisibilityHandler = () => {
    this.setState({ showBooks: !this.state.showBooks});
  };

  shouldComponentUpdate = () =>{
    console.log("[App] - shouldComponentUpdate()");
    return false;
  };

  componentDidUpdate = () => {
    console.log("[App] - componentDidUpdate()");
  };

    render(){
      console.log("[App] -  render()");
      return(
        <div className='App'>
          <h1>lifecycle-updation-shouldcomponentupdate-false</h1>
          <button onClick={this.bookVisibilityHandler}>Show/Hide</button>
          {this.state.showBooks ? <h1>Book List</h1>: null}
        </div>
      );
    }
}

export default App;
