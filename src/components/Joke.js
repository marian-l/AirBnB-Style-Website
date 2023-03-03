import React from "react";

export default function Joke(props) {
    return (
        <div className="joke">
        {props.setup && <h3> Setup: {props.setup} </h3>}
        <p> Punchline: { props.punchline }</p>
    </div>
    )
}