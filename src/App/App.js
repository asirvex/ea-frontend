import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    nextText: ['Hello World', 'you pressed it', 'you pressed it again'],
    number: 0
  }

  number = 0
  render(){

    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
  }
}

export default App;
