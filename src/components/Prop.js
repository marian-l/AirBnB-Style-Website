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

// PROP QUIZ
// ---------
// 1. What do props help us accomplish? -> They allow us to built reusable components which will be displaying the prop data instead of hardcoded data
// 
// 2. How do you pass a prop into a component? -> we have a props parameter inside of the component-function-declaration and pass props where the components is called like img="imagesrc"
// 
// 3. Can i pass a custom prop to a native DOM element? (<div blablabla={true}>) -> i think to pass it like that we need to put the attribute in { as well } but i dont see how 
//      a custom attribute could be added to a div section. Native elements are not compatible with props, but we could make custom ones with native ones to expand them with props
// 
// 4. How do I receive props in a component?
//  function NavBar(props) {
//      return (
//      <header>
//          <h1> {props.name} </h1>
//      </header>
//      )
//  }
// 
// 5. What data type is "props" when the component receives it? -> probably an object or array like structure