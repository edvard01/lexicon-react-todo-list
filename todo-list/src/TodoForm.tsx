import { MouseEventHandler, useState } from "react";
import "./todoform.css";

export function TodoForm(): JSX.Element {
  const [todo, setTodo] = useState("");
  const [owner, setOwner] = useState("");

  return (
    <>
      <div className="form-container">
        <h3>Input todo item into the list:</h3>
        <form className="todo-form">
          <span>
            <label>Todo:</label>
            <br />
            <input
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
          </span>
          <span>
            <label>Owner:</label>
            <br />
            <input
              type="text"
              onChange={(e) => setOwner(e.target.value)}
              value={owner}
            />
          </span>
          <button type="submit">Add to list</button>
        </form>
      </div>
    </>
  );
}
