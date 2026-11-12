
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <a href={`/user/${item.userId}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
