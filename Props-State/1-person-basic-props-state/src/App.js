import React from 'react';
import './App.css';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Welcome to the React development!!!</h1>
      </div>
      <Person name={"Satyaki"} designation={"App Developer"} organization={"IBM"}/>
      <Person name={"Natasha"} designation={"Lead Developer"} organization={"IBM India"}/>
      <Person name={"Sumon"} designation={"Project Manager"} organization={"Digital BP"}/>
      <Person name={"Ayan"} designation={"Scrum Master"} organization={"IBM"}/>
      <Person name={"Sinjini"} designation={"Tester"} organization={"Air BP"}/>
    </div>
  );
}

export default App;
