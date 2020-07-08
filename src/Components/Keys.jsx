import React from "react";


const Keys = ({data,handleClick,handleTransition}) => {
    const keys = data.map( item => {
        const {dataKey, description,key , audio} = item;
       
        return (
            <div className = "drum-pad" key = {dataKey} data-key = {dataKey} id = {description} onClick = {handleClick} onTransitionEnd = {handleTransition}>
                <p>{key}</p>
                <audio  id={key} className="clip" src={audio} data-key={dataKey} />
            </div>
        )
    })
    return (
        <div className="container-keys">
            {keys}
        </div>
    )
}

export default Keys;