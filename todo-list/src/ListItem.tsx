import { useState } from "react";

interface IListItem {
  todo: string;
  owner: string;
  id: number;
  moveListItem: (id: number, move: string) => void;
  deleteListItem: (id: number) => void;
}

export function ListItem({
  todo,
  owner,
  id,
  moveListItem,
  deleteListItem,
}: IListItem): JSX.Element {
  const [isEditing, setEditing] = useState(false);
  const [text, setTodo] = useState(todo);

  const handleOnClick = () => {
    setEditing((preVal) => !preVal);
  };

  const handleMoveItemClick = (move: string) => {
    moveListItem(id, move);
    setTodo(todo);
  };

  const handleDelete = (id: number) => {
    deleteListItem(id);
    console.log(id);
  };
  return (
    <>
      <span className="text-area">
        <p className="todo-text">{todo}</p>
        <p className="owner-text">{owner}</p>
      </span>
      <span className="nav-btn-area">
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
    </>
  );
}
