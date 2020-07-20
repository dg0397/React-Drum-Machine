import React, {useState , useEffect} from 'react';
import "./Styles/styles.scss"

import Main from './Components/Main'
import data from "./Components/data";


function App(){
  const [valueDisplay, setValueDisplay] = useState('Play a sound');
  const [onApp, setOnApp] = useState(true);
  const [valueRange , setValueRange] = useState(0.5);

  useEffect( () => {
    const display = document.getElementById('display');
    display.innerText = !onApp ? '' : valueDisplay;
  },[valueDisplay, onApp])


  const handleClick = (audio,element,description) => {
    if(!onApp)return;

    
    audio.currentTime = 0;
    audio.volume = valueRange;
    audio.play();


    element.classList.add('active-key');

    setValueDisplay(description);
    
    
  }
  const handleKey = (e) => {
    if(!onApp)return;

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio) return;

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const description = key.id;


    console.log(valueRange);
    audio.currentTime = 0;
    audio.volume = valueRange;
    audio.play();

    key.firstChild.classList.add('active-key');

    setValueDisplay(description);

  }

  const handleTransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('active-key')
  }

  const turnOffApp = (e) => {
    
    setOnApp(!onApp);
    setValueDisplay('Play a sound...');
    setValueRange(0.5);

  }

  const handleRange = (e) => {
    setValueRange(e.target.value);
    setValueDisplay(`Volume: ${Math.round(e.target.value * 100)}%`)
  }

  const handleClickUp = (e) => {
    setValueDisplay('Play a sound...');
  } 

  return (
    <Main 
    data = {data}
    handleClick = {handleClick}
    handleTransition = {handleTransition}
    handleTurnOffApp = {turnOffApp}
    turnOnApp = {onApp}
    handleRange = {handleRange}
    valueRange = {valueRange}
    handleClickUp = {handleClickUp}
    handleKeyPress = {handleKey}
    />
  );
}

export default App;
