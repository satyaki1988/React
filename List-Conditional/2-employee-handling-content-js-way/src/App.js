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
    let emps = null ;

    if (showEmployee) {
      emps = (
        <div>
              <Employee name={employees[0].name} role={employees[0].role} />
              <Employee name={employees[1].name} role={employees[1].role} />
              <Employee name={employees[2].name} role={employees[2].role} />
              <Employee name={employees[3].name} role={employees[3].role} />
              <Employee name={employees[4].name} role={employees[4].role} />
            </div>
      )
    }

    return (
      <div className="App">
        <hr />
        <button className="btn btn-primary" onClick={this.onShowHidePanel}>Toggle Show/Hide</button>
        <hr />
        {emps}
      </div>
    );
  }

}

export default App;
