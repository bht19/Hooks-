// import { useEffect, useState } from 'react'
// import './App.css'
// import React from 'react';

// function App() {
 
//   const [render, setRender] = useState(true);

//   useEffect(() =>{
//     setInterval(() =>{ 
//       setRender(r => !r);
//     },5000)
//   }, []);

//   return (
//     <>
//       {render ? <MyComponent /> : <div> Empty </div>}
//     </>
//   )
// }

// Functional Events

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count +1);
//   };

//   return (
//     <div>
//       <p> {count} </p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// Classical Events

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }

// LifeCycle Events

// function MyComponent () {
//   useEffect(() => {
//     console.error("component Mounted");

//     return () => {
//       console.log("Component Unmounted");
//     };
//   }, []);

//   return <div>
//     From inside My Component
//   </div>
// }



// export default App

import { useEffect, useState } from 'react'
import axios from 'axios'

function useTodos(){
  const [todos, setTodos] = useState([]
    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
        })
    }, [])

    return todos;
  )
}
function App() {
  const todos = useTodos();

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App