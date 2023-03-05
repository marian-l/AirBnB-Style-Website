import React from "react";

export default function Quiz(props){
    return (
        <div className="quiz">
            {props.title && <h3 className="quiz--title"> {props.title} </h3>}
            {props.question && <h5 className="quiz--question"> Question: {props.question} </h5>}
            {props.answer && <p className="quiz--answer"> Answer: {props.answer} </p>}
        </div>
    )
}