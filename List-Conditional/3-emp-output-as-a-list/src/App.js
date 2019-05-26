import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee/Employee';

class App extends Component {

  state = {
    employees: [
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
    let { employees, showEmployee } = this.state;
    let emps = null;

    if (showEmployee) {
      emps = (
        employees.map((employee, index) => {
          return (
            <Employee name={employee.name} role={employee.role} key={index} />
          )
        })
      )
    }

    return (
      <div className="App">
        <hr />
        <button className="btn btn-primary" onClick={this.onShowHidePanel}>Toggle Show/Hide</button>
        <hr />
        <div>
          {emps}
        </div>
      </div>
    );
  }

}

export default App;
