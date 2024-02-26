import "./todoform.css";

export function TodoForm() {
  return (
    <>
      <div className="form-container">
        <h3>Input todo item into the list:</h3>
        <form className="todo-form">
          <span>
            <label>Todo:</label>
            <br />
            <input type="text" />
          </span>
          <span>
            <label>Owner:</label>
            <br />
            <input type="text" />
          </span>
          <button type="submit">Add to list</button>
        </form>
      </div>
    </>
  );
}
