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
    display.innerText = onApp === false ? '' : valueDisplay;
  },[valueDisplay, onApp])


  const handleClick = e => {
    if(!onApp)return;

    const id = e.target.innerText
    const audio = document.querySelector(`audio#${id}`);
    const description = e.target.parentNode.id;
        
    audio.currentTime = 0;
    audio.volume = valueRange;
    audio.play();


    e.target.classList.add('active-key');

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
