import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Prop from "./components/Prop"

export default function App() {
  return (
    <div>
      <NavBar />
      <Prop 
        img="./images/Group77.png"
        name="01632 888888888"
        number="Marina Marian Miraan iMaarn"
        email="marian@marian.marian"
      />
      <Hero />
      <Card 
        img=""
        name="Something Something"
        rating={5}
        votes={6}
        cost={136}
        country="USA"

      />
      <h1> App Component </h1>
    </div>
  )
}