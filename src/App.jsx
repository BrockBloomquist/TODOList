import "./styles.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [userMessage, setUserMessage] = useState("No Todos");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") {
      setError(true);
      return;
    }
    setError(false);
    setUserMessage("No Todos");
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <h1
        style={{
          position: "relative",
        }}
      >
        Welcome to my TODO List Project!
      </h1>
      <h4>Instructions:</h4>
      <p>Fill in the form below and press add to add a new TODO!</p>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">
            <h3>Add a new Item</h3>
          </label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
          <Alert variant="danger" key="danger">
            <Alert.Heading>{error && "Empty TODO"}</Alert.Heading>
          </Alert>
        </div>
      </form>
      <h1 className="header">TODO List</h1>
      {todos.length === 0 && userMessage}
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
