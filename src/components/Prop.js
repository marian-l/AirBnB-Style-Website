import React from "react";
import jokesData from "./../data/jokesData"
import Joke from "../components/Joke"

export default function Prop() {
    const jokeElements = jokesData.map((x, index) => {
        return <Joke setup={x.setup} punchline={x.punchline} key={index}/>
            })
    return (
            <div className="prop--jokes">
                {jokeElements}
            </div>
    )
}