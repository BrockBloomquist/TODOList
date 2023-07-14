import "./styles.css";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1 className="header">TODO List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1<button className="btn btn-danger">Delete</button>
          </label>
        </li>
      </ul>
    </>
  );
}
