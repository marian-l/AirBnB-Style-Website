export default [
    {
        title: "Props"
    },
    {
        question: "What do props help us accomplish?",
        answer: "They allow us to built reusable components which will be displaying the prop data instead of hardcoded data."
    },
    {
        question: "How do you pass a prop into a component?",
        answer: "we have a props parameter inside of the component-function-declaration and pass props where the components is called like img='imagesrc'"
    },
    {
        question: "Can i pass a custom prop to a native DOM element? (<div blablabla={true}>)",
        answer: "i think to pass it like that we need to put the attribute in { as well } but i dont see how a custom attribute could be added to a div section. Native elements are not compatible with props, but we could make custom ones with native ones to expand them with props"
    },
    {
        question: "How do I receive props in a component?",
        answer: "function NavBar(props) {return (<header><h1> {props.name} </h1></header>)}"
    },
    {
        question: "What data type is 'props' when the component receives it?",
        answer: "probably an object or array like structure"
    },
    {
        title: "Map"
    },
    {
        question: "What does the .map() array method do?",
        answer: "it creates a for-loop for us which iterates over the array and returns a new array."
    },
    {
        question: "what do we usually use .map() for in React?",
        answer: "to render similiar components with data from an array"
    },
    {
        question: "why is using .map() better than just creating the components manually by typing them out?",
        answer: "The data can be manipulated and the components will change accordingly without the need "
    },
    {
        question: "",
        answer: ""
    }
]
