import { useState } from "react";

interface IListItem {
  todo: string;
  owner: string;
  id: number;
  done: boolean;
  moveListItem: (id: number, move: string) => void;
  deleteListItem: (id: number) => void;
  changeTodo: (newTodo: string, id: number) => void;
  setDone: (id: number) => void;
}

export function ListItem({
  todo,
  owner,
  id,
  done,
  moveListItem,
  deleteListItem,
  changeTodo,
  setDone,
}: IListItem): JSX.Element {
  const [isEditing, setEditing] = useState(false);
  const [text, setTodo] = useState(todo);

  const handleOnClick = () => {
    if (isEditing) {
      changeTodo(text, id);
    } else {
      setTodo(todo);
    }
    setEditing((preVal) => !preVal);
  };

  const handleMoveItemClick = (move: string) => {
    moveListItem(id, move);
    setTodo(todo);
  };

  const handleDelete = (id: number) => {
    deleteListItem(id);
  };
  return (
    <>
      <li className={done ? "done" : ""}>
        <span className="text-area">
          <span>
            {isEditing ? (
              <span>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setTodo(e.target.value)}
                />
                <button onClick={handleOnClick}>Save</button>
              </span>
            ) : (
              <p className="todo-text">{todo}</p>
            )}
          </span>
          <p className="owner-text">{owner}</p>
        </span>
        <span className="nav-btn-area">
          <button
            type="submit"
            id="done"
            className="done"
            onClick={() => setDone(id)}
          >
            <span className="material-symbols-outlined">check_circle</span>
          </button>
          <button
            id="edit"
            type="submit"
            className={isEditing ? "editing" : "edit"}
          >
            <span onClick={handleOnClick} className="material-symbols-outlined">
              edit
            </span>
          </button>
          <button id="delete" onClick={() => handleDelete(id)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
          <span className="direction-btns">
            <button
              id="up"
              className="material-symbols-outlined"
              onClick={() => handleMoveItemClick("up")}
            >
              expand_less
            </button>
            <button
              id="down"
              className="material-symbols-outlined"
              onClick={() => handleMoveItemClick("down")}
            >
              expand_more
            </button>
          </span>
        </span>
      </li>
    </>
  );
}
