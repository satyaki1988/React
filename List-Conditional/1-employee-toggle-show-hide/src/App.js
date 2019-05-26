import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee/Employee';

class App extends Component {

  state = {
    employe: [
      { name: 'Sumon', role: 'PM' },
      { name: 'Natasha', role: 'Lead Developer' },
      { name: 'Ayan', role: 'Scrum Master' },
      { name: 'Sinjini', role: 'Tester' },
      { name: 'Satyaki', role: 'Developer' }
    ],
    showEmployee: false
  }

  onShowHidePanel = () => {
    const doesShow = this.state.showEmployee;
    this.setState({ showEmployee: !doesShow });
  }

  render() {
    let { employe, showEmployee } = this.state;

    return (
      <div className="App">
        <hr />
        <button onClick={this.onShowHidePanel}>Toggle Show/Hide</button>
        <hr />
        {
          showEmployee ?
            <div>
              <Employee name={employe[0].name} role={employe[0].role} />
              <Employee name={employe[1].name} role={employe[1].role} />
              <Employee name={employe[2].name} role={employe[2].role} />
              <Employee name={employe[3].name} role={employe[3].role} />
              <Employee name={employe[4].name} role={employe[4].role} />
            </div> : null
        }

      </div>
    );
  }

}

export default App;
