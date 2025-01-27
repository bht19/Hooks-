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

// Todo custom Hook simple hook

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(){
//   const [todos, setTodos] = useState([]
//     useEffect(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//         })
//     }, [])

//     return todos;
//   )
// }
// function App() {
//   const todos = useTodos();

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


// including a loading parameter

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos() {
//   const [loading, setLoading] = useState(true);
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//   }, [])

//   return {
//     todos: todos,
//     loading: loading
//   };
// }

// function App() {
//   const { todos, loading } = useTodos();

//   if (loading) {
//     return <div>
//       Loading...
//     </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App

// // Including a contineous fetch from the server with Loading displayed 

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     }, n * 1000)
  
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(10);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


