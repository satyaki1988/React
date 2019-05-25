import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

function App() {
  const [nameState, setNameState] = useState({
    person: [
      { name: 'Satyaki', userName: 'satyaki123' },
      { name: 'Suman', userName: 'suman123' },
      { name: 'Maxi', userName: 'maxi123' },
    ]
  });

  const [roleState, setRoleState] = useState({
    role: [
      { role: 'Admin' },
      { role: 'Normal' },
      { role: 'Beginer' },
    ]
  });

  const onNameChangedHandler = (newName) => {
    setNameState({
      person: [
        { name: newName, userName: 'satyaki123' },
        { name: 'Suman', userName: 'suman123' },
        { name: 'Maxi', userName: 'maxi123' },
      ]
    });
  }

  const onRoleChangedHandler = (newRole) => {
    setRoleState({
      role: [
        { role: 'Admin' },
        { role: newRole },
        { role: 'Beginer' },
      ]
    })
  }

  const nameChangeEventHandler = (event) => {
    setNameState({
      person: [
        { name: 'Satyaki', userName: 'satyaki123' },
        { name: 'Suman', userName: 'suman123' },
        { name: event.target.value, userName: 'maxi123' },
      ]
    });
  }

  return (
    <div className="App">
      <UserInput
        nameChange={nameChangeEventHandler}
        name={nameState.person[2].name} />

      <UserOutput
        name={nameState.person[0].name}
        userName={nameState.person[0].userName}
        clickName={() => onNameChangedHandler('Riya')}
      >Your role is {roleState.role[0].role}</UserOutput>
      <UserOutput
        name={nameState.person[1].name}
        userName={nameState.person[1].userName}
        clickRole={() => onRoleChangedHandler('Genral')}
      >Your role is {roleState.role[1].role}</UserOutput>
      <UserOutput
        name={nameState.person[2].name}
        userName={nameState.person[2].userName}
      >Your role is {roleState.role[2].role}</UserOutput>
    </div>
  );
}

export default App;
