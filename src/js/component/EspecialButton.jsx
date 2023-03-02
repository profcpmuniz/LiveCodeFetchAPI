import React from 'react'
export default function EspecialButton(props){
    return <button onClick={props.handleSomething}>{props.title}</button>
}