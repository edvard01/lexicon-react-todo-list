import { useState } from "react";

interface IListItem {
  todo: string;
  owner: string;
  id: number;
}

export function ListItem({ todo, owner, id }: IListItem): JSX.Element {
  const [isEditing, setEditing] = useState(false);
  const [text, setTodo] = useState(todo);

  const handleOnClick = () => {
    setEditing((preVal) => !preVal);
  };
  return (
    <>
      <span className="text-area">
        <span>
          {isEditing ? (
            <input
              type="text"
              value={text}
              onChange={(e) => setTodo(e.target.value)}
            />
          ) : (
            <p className="todo-text">{text}</p>
          )}
        </span>
        <p className="owner-text">{owner}</p>
      </span>
      <span className="nav-btn-area">
        <button id="edit" className={isEditing ? "editing" : "edit"}>
          <span onClick={handleOnClick} className="material-symbols-outlined">
            edit
          </span>
        </button>
        <button id="delete">
          <span className="material-symbols-outlined">delete</span>
        </button>
        <span className="direction-btns">
          <button id="up" className="material-symbols-outlined">
            expand_less
          </button>
          <button id="down" className="material-symbols-outlined">
            expand_more
          </button>
        </span>
      </span>
    </>
  );
}
