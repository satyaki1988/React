import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {

  state = {
    inputText: '',
    inputTextLength: 0,
    inputTextArray: []
  }

  onTextChangeListener = (event) => {
    const userText = event.target.value;
    const userTextLength = userText.length;
    const textArray = userText.split('');
    let userTextArray = [...this.state.inputTextArray];
    userTextArray = textArray;

    this.setState({ inputText: userText, inputTextLength: userTextLength, inputTextArray: userTextArray });
  }

  onDeleteLetter = (index) => {    
    let textArray = [...this.state.inputTextArray];
    textArray.splice(index,1);
    const textVal = textArray.join('');
    const textLength = textVal.length;

    this.setState({ inputText: textVal, inputTextLength: textLength, inputTextArray: textArray });
  }

  render() {
    let { inputText, inputTextLength, inputTextArray } = this.state;
    let cc = inputTextArray.map((letter, index) => {
      return (
        <CharComponent key={index} letter={letter} removeLetter={() => this.onDeleteLetter(index)} />
      )
    });

    return (
      <div className="App">
        <div className="container">
          <hr />
          <input type="text" onChange={e => this.onTextChangeListener(e)} value={inputText} />
          <ValidationComponent textLength={inputTextLength} />
          <hr />
          <hr />
          {cc}

        </div>

      </div>
    );
  }
}

export default App;
