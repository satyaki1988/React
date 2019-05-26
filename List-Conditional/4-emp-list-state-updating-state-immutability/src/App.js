import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee/Employee';

class App extends Component {

  state = {
    employees: [
      { id: 'adhoc1', name: 'Sumon', role: 'PM' },
      { id: 'adhoc2', name: 'Natasha', role: 'Lead Developer' },
      { id: 'adhoc3', name: 'Ayan', role: 'Scrum Master' },
      { id: 'adhoc4', name: 'Sinjini', role: 'Tester' },
      { id: 'adhoc5', name: 'Satyaki', role: 'Developer' }
    ],
    showEmployee: false
  }

  onShowHidePanel = () => {
    const doesShow = this.state.showEmployee;
    this.setState({ showEmployee: !doesShow });
  }

  onRemoveEmployee = empIndex => {
    // const employees = this.state.employees.slice(); -- vanila JS simply copy of orginal one to new one

    const emps = [...this.state.employees];

    emps.splice(empIndex,1);
    this.setState({employees: emps});
  }

  onNameChangeHandler = (event, id) => {
    const empIndex = this.state.employees.findIndex(e => {
      return e.id === id ;
    });

    const emp = {
      ...this.state.employees[empIndex]
    };
    // OR 
    // const emps = Object.assign({}, this.state.employees);
    emp.name = event.target.value;

    const emps = [...this.state.employees];
    emps[empIndex] = emp;

    this.setState({employees: emps});
  }

  render() {
    let { employees, showEmployee } = this.state;
    let emps = null;

    if (showEmployee) {
      emps = (
        employees.map((employee, index) => {
          return (
            <Employee
              name={employee.name}
              role={employee.role}
              key={employee.id} 
              onRemove={() => this.onRemoveEmployee(index)}
              onNameChange={e => this.onNameChangeHandler(e, employee.id)}/>
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
