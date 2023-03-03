import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image"></img>
            <div className="card--stats">
                <img className="card--star" src={props.img}></img>
                <span>{props.rating}</span>
                <span className="gray">({props.votes}) </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.name}</p>
            <p><span className="bold">{props.cost}</span></p>
        </div>
    )
}