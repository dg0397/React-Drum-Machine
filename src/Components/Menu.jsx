import React from "react";

const Menu = ({handleTurnOffApp,turnOnApp, handleRange ,valueRange ,handleClickUp}) => {
    const button = turnOnApp ?  
                            <button className="power-btn" onClick = {handleTurnOffApp }>Power</button> :
                            <button className="power-btn active" onClick = {handleTurnOffApp }>Power</button>;                        
        
    return (
        <div className="container-menu">
            <div className="btn">
                {button}
            </div>
            <div id="display">Play a sound...</div>
            <div className="range">
                <label htmlFor="volume">Volume</label>
                <input type="range" name="volume" id = 'volume'  className="slider" min="0" max="1" step=".05"  onChange = {handleRange} value = {valueRange} onPointerUp = {handleClickUp} onTouchEnd={handleClickUp} onTouchMove={handleRange}/>
            </div>
        </div>
    )
}

export default Menu;