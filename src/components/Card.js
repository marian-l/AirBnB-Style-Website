import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image"></img>
            <div className="card--stats">
                <img className="card--star"></img>
                <span>5.0</span>
                <span className="gray">(6) </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 / person</span></p>
        </div>
    )
}