https://www.youtube.com/watch?v=8bhp89AIsnc


1. what is JSX?

syntactic sugar, a way for javascript to load (maybe with babel), for it to be renderable on the DOM


2. explain data flow in React

Data flow in react is unidirectional, flows from parent to child. 

you can pass data from parent->child with props

Sibling-to-sibling can be passed from their parent, for example, setting a useState on the parent and passing it to the children, that way both the children can use the state to share data with each other

Lastly, you can use CONTEXT, useContext, for GLOBAL state management, that way all components have access to that data

3. how would you delay an API call until a component has mounted

using class components, you could use componentDidMount(), with functional components, use useEffect with empty dependcy array