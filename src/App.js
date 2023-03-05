import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import airbnbExpData from "./data/airbnbExpData";
// import Prop from "./components/Prop"
import Quiz from "./components/Quiz";
import quizData from "./data/quizData";

export default function App() {
  const quizElements = quizData.map((x, index) => {
    return <Quiz title={x.title} question={x.question} answer={x.answer} key={index}/>
  })
  const airBnbCards = airbnbExpData.map(x => {
    return <Card 
    {...x}
    /* also possible: x={x}*/ 
    key={x.id} />
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="cards">
        {airBnbCards}
      </div>
      {/* first Prop component
      <Prop 
        img="./images/Group77.png"
        name="01632 888888888"
        number="Marina Marian Miraan iMaarn"
        email="marian@marian.marian"
      />
      */}
      {quizElements}
      <h1> App Component </h1>
    </div>
  )
}