import React from 'react';
import './App.css';
import Embeded from './components/Embeded/Embeded';

function App() {

  const onClickOpenFile = () => {
    alert('Open a file');
    console.log('Hey I');
  }
  return (
    <div className="App">
      <Embeded click={onClickOpenFile}/>
    </div>
  );
}

export default App;
