import { FormEvent, useState, useEffect } from "react";
import "./todoform.css";
import { List } from "./List";

interface IListItem {
  id: number;
  text: string;
  author: string;
}

export function TodoForm(): JSX.Element {
  const [todo, setTodo] = useState("");
  const [owner, setOwner] = useState("");

  const [myArray, setMyArray] = useState<IListItem[]>([]);
  const [id, updateId] = useState<number>(1);

  useEffect(() => {
    console.log(myArray);
  }, [myArray]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMyArray((prevArray) => [
      ...prevArray,
      { id: id, text: todo, author: owner },
    ]);
    updateId(id + 1);
  }

  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   if (myArray?.length === 0) {
  //     setMyArray([{ id: id, text: todo, author: owner }]);
  //   } else {
  //     setMyArray((prevArray) => [
  //       ...prevArray,
  //       { id: id, text: todo, author: owner },
  //     ]);
  //   }
  //   updateId(id + 1);
  //   console.log(myArray);
  // }

  return (
    <>
      <div className="form-container">
        <h3>Input todo item into the list:</h3>
        <form className="todo-form" onSubmit={handleSubmit}>
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
      <div>
        {myArray.length !== 0 ? (
          <List listContent={myArray} />
        ) : (
          <p>list goes here</p>
        )}
      </div>
    </>
  );
}
