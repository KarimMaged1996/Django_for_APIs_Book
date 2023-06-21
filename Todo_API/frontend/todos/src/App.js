import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/').then((response) => {
      setTodos(response.data);
    });
  }, []);

  let elements = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <h1>{todo.title}</h1>
        <p> {todo.body} </p>
      </div>
    );
  });
  return <div className="App">{elements}</div>;
}

export default App;
