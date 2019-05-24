import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Satyaki', designation: 'App Developer', organization: 'IBM' },
      { name: 'Sumon', designation: 'Project Manager', organization: 'Air BP' },
      { name: 'Ayan', designation: 'Scrum Master', organization: 'Ad Hoc 24' },
      { name: 'Natasha', designation: 'Lead Developer', organization: 'IBM India' },
      { name: 'Sinijini', designation: 'Tester', organization: 'Digital BP' }
    ],
    otherState: 'He taught us so much :('
  };

  onPersonChangeHandler= () => {
    console.log('onPersonChangeHandler');
    this.setState({
      person: [
        { name: 'Mukherjee', designation: 'App Developer', organization: 'IBM' },
        { name: 'Sumon', designation: 'Project Manager', organization: 'Air BP' },
        { name: 'Ayan', designation: 'Scrum Master', organization: 'Ad Hoc 24' },
        { name: 'Natasha', designation: 'Lead Developer', organization: 'IBM India' },
        { name: 'Sinijini', designation: 'Tester', organization: 'BP' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Welcome to the React development!!!</h1>
        </div>
        <hr></hr>
        <button className="btn btn-primary" onClick={this.onPersonChangeHandler}>Change Person</button>
        <hr></hr>
        <Person
          name={this.state.person[0].name}
          designation={this.state.person[0].designation}
          organization={this.state.person[0].organization} />
        <Person
          name={this.state.person[1].name}
          designation={this.state.person[1].designation}
          organization={this.state.person[1].organization} 
          click={this.onPersonChangeHandler}>
          {this.state.otherState}
        </Person>
        <Person
          name={this.state.person[2].name}
          designation={this.state.person[2].designation}
          organization={this.state.person[2].organization} />
        <Person
          name={this.state.person[3].name}
          designation={this.state.person[3].designation}
          organization={this.state.person[3].organization} />
          <Person
          name={this.state.person[4].name}
          designation={this.state.person[4].designation}
          organization={this.state.person[4].organization} />
      </div>
    );
  }
}

export default App;
