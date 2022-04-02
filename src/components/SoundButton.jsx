import React from 'react';
import './soundButton.css';
import soundBut from '../assets/images/sound.gif';
import audio from '../assets/media/ambient.mp3';


const Soundbutton = () => {
    return (
        <div className='sound-button-content'>
            <img className='sound-button paused' src={soundBut} alt='button-sound'/>
            <audio className='audio' src={audio} loop ></audio>
        </div>
    );
}

export default Soundbutton;
