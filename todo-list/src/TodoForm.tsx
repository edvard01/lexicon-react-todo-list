import { FormEvent, useState } from "react";
import "./todoform.css";
import { List } from "./List";

interface IListItem {
  id: number;
  text: string;
  author: string;
  done: boolean;
  date: string;
}

export function TodoForm(): JSX.Element {
  const [todo, setTodo] = useState("");
  const [owner, setOwner] = useState("");

  const [myArray, setMyArray] = useState<IListItem[]>([]);
  const [id, updateId] = useState<number>(1);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let currentTime = getCurrentTime();
    setMyArray((prevArray) => [
      ...prevArray,
      {
        id: id,
        text: todo,
        author: owner,
        done: false,
        date: currentTime,
      },
    ]);
    updateId(id + 1);
  }

  function moveListItem(id: number, move: string) {
    let index: number = -1;
    let counter: number = 0;

    myArray.forEach((object) => {
      if (object.id === id) {
        index = counter;
      }
      counter++;
    });

    if (
      index === -1 ||
      (index === 0 && move === "up") ||
      (index === myArray.length - 1 && move === "down")
    ) {
      return;
    } else {
      const newArray: IListItem[] = [...myArray];
      if (move === "up") {
        const tempObject: IListItem = newArray[index];
        newArray[index] = newArray[index - 1];
        newArray[index - 1] = tempObject;
        setMyArray(newArray);
      } else if (move === "down") {
        const tempObject: IListItem = newArray[index];
        newArray[index] = newArray[index + 1];
        newArray[index + 1] = tempObject;
        setMyArray(newArray);
      }
    }
  }

  function deleteListItem(id: number) {
    let counter: number = 0;
    let index: number = -1;
    myArray.forEach((element) => {
      if (element.id === id) {
        index = counter;
      }
      counter++;
    });

    if (index !== -1) {
      const newArray: IListItem[] = [...myArray];
      newArray.splice(index, 1);
      setMyArray(newArray);
    } else {
      return;
    }
  }

  function changeTodo(newTodo: string, id: number) {
    const newArray: IListItem[] = [...myArray];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === id) {
        newArray[i].text = newTodo;
        setMyArray(newArray);
        return;
      }
    }

    return;
  }

  function setDone(id: number) {
    const newArray: IListItem[] = [...myArray];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === id) {
        if (newArray[i].done) {
          newArray[i].done = false;
        } else {
          newArray[i].done = true;
        }
        setMyArray(newArray);
        return;
      }
    }

    return;
  }

  function getCurrentTime(): string {
    let currentTime = new Date();
    const time = currentTime.toLocaleDateString("sv-SE", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${time}`;
  }

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
      <div className="list-container">
        {myArray.length !== 0 ? (
          <List
            listContent={myArray}
            moveListItem={moveListItem}
            deleteListItem={deleteListItem}
            changeTodo={changeTodo}
            setDone={setDone}
          />
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
