import React from "react";
import Header from "./Header";
import Keys from "./Keys";
import Menu from "./Menu";
import Footer from "./Footer";

const Main = ({data , handleClick , handleTransition, turnOnApp , handleTurnOffApp ,handleRange , valueRange , handleClickUp ,handleKeyPress,}) => {
    return (
        <div id="drum-machine" onKeyDown = {handleKeyPress} tabIndex="1">  
        <Header />
        <Keys 
        data = {data} 
        handleClick = {handleClick}  
        handleTransition = {handleTransition}
        />
        <Menu 
        turnOnApp = {turnOnApp} 
        handleTurnOffApp = {handleTurnOffApp } 
        handleRange = {handleRange} 
        valueRange = {valueRange} 
        handleClickUp = {handleClickUp}/>
        <Footer/>
        </div>   
    )
}

export default Main;