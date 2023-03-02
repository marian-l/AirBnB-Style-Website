// import React from "react";

// export default function javascript() {
//     return (
//     <div>
//         <h1>Map Funktion</h1>
//         <p> const array = [1, 4, 9, 16]; </p>
//         <p> console.log(array.map(x arrow x * 2)) : {array.map(x => x * 2)}</p>
//         <p>{array.map(x => x ** 2)}</p>
//     </div>
//         )
// } 

const array = [1,4,9,16];
const squaredArray = array.map(x => x ** 2);
const names = ["arnold", "bertrand", "cigarette", "dorian", "egelbert"]
const CapitalsFirstNames = names.map(x => x[0].toLocaleUpperCase() + x.slice(1))
console.log(CapitalsFirstNames)

const Pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const PokemonParagraphs = Pokemon.map(x => "<p>" + x + "<p>")
console.log(PokemonParagraphs)
// const PokemonParagraphs2 = Pokemon.map(x => {
//     return '<p>{x}<p>'
// })