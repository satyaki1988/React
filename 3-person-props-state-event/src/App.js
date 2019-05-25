import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Person';

const App = (props) => {

  const [personState, setPersonState] = useState({
    person: [
      { name: 'Satyaki', designation: 'App Developer', organization: 'IBM' },
      { name: 'Sumon', designation: 'Project Manager', organization: 'Air BP' },
      { name: 'Ayan', designation: 'Scrum Master', organization: 'Ad Hoc 24' },
      { name: 'Natasha', designation: 'Lead Developer', organization: 'IBM India' },
      { name: 'Sinijini', designation: 'Tester', organization: 'Digital BP' }
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: 'He taught us so much'
  })

  console.log(personState, otherState);

  const onPersonChangeHandler = (newName, newDesig) => {
    setPersonState({
      person: [
        { name: newName, designation: 'App Developer', organization: 'IBM' },
        { name: 'Sumon', designation: 'Project Manager', organization: 'Air BP' },
        { name: 'Ayan', designation: 'Scrum Master', organization: 'Ad Hoc 24' },
        { name: 'Natasha', designation: 'Lead Developer', organization: 'IBM India' },
        { name: 'Sinijini', designation: 'Tester', organization: newDesig }
      ]
    });

    setOtherState({
      otherState: 'He likes to play football'
    })
  }

  const onNameChangeHandler = (event) => {
    setPersonState({
      person: [
        { name: event.target.value, designation: 'App Developer', organization: 'IBM' },
        { name: 'Sumon', designation: 'Project Manager', organization: 'Air BP' },
        { name: 'Ayan', designation: 'Scrum Master', organization: 'Ad Hoc 24' },
        { name: 'Natasha', designation: 'Lead Developer', organization: 'IBM India' },
        { name: 'Sinijini', designation: 'Tester', organization: 'BP' }
      ]
    })
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to the React development!!!</h1>

      </div>
      <hr></hr>
      <button className="btn btn-primary" onClick={() => onPersonChangeHandler('Saurabh', 'IBM Global')}>Change Person</button>
      <hr></hr>
      <Person
        name={personState.person[0].name}
        designation={personState.person[0].designation}
        organization={personState.person[0].organization}
        nameChange={onNameChangeHandler} />
      <Person
        name={personState.person[1].name}
        designation={personState.person[1].designation}
        organization={personState.person[1].organization}
        click={() => onPersonChangeHandler('Satyaki')}>
        {otherState.otherState}
      </Person>
      <Person
        name={personState.person[2].name}
        designation={personState.person[2].designation}
        organization={personState.person[2].organization} />
      <Person
        name={personState.person[3].name}
        designation={personState.person[3].designation}
        organization={personState.person[3].organization} />
      <Person
        name={personState.person[4].name}
        designation={personState.person[4].designation}
        organization={personState.person[4].organization} />
    </div>
  );
}

export default App;
