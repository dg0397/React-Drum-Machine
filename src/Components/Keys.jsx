import React from "react";


const Keys = ({data,handleClick,handleTransition}) => {

    const keys = data.map( item => {

        const {dataKey, description,key , audio} = item;

        const audioElement = React.createRef();

        const playAudio = e => {
            const element = e.target;
            const audio = audioElement.current;
            const description = e.target.parentNode.id;
            handleClick(audio,element,description)
        }

        return (
            <div className = "drum-pad" key = {dataKey} data-key = {dataKey} id = {description} onClick = {playAudio} onTransitionEnd = {handleTransition}>
                <p>{key}</p>
                <audio  id={key} className="clip" src={audio} data-key={dataKey} ref = {audioElement}/>
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