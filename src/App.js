import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mainbody">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
