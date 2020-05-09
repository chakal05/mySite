import React from 'react';
import button from '../assets/styles/button.scss';
export default function Button(props){
    return (
        <div>
        <button className='myBtn' onClick={props.action}> {props.text} </button>
        </div>
    )
}