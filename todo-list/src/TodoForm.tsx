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

  // function moveListItem(id: number, move: number) {
  //   console.log("MOVELIST WORKs");
  //   console.log(myArray);
  //   let index: number = 0;
  //   let counter: number = 0;
  //   myArray.forEach((element) => {
  //     if (element.id === id) {
  //       index = counter;
  //     }
  //     counter++;
  //   });
  //   console.log(index);

  //   if (index <= 0 && move === -1) {
  //     console.log("failed");
  //     return;
  //   } else if (index >= myArray.length - 1 && move === 1) {
  //     console.log("failed");
  //     return;
  //   }
  //   const newArray: IListItem[] = [...myArray];

  //   const tempObject: IListItem = newArray[index];
  //   newArray[index] = newArray[index + move];
  //   newArray[index + move] = tempObject;
  //   setMyArray(newArray);
  //   console.log(newArray);
  // }

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
        console.log(newArray);
      } else if (move === "down") {
        const tempObject: IListItem = newArray[index];
        newArray[index] = newArray[index + 1];
        newArray[index + 1] = tempObject;
        setMyArray(newArray);
        console.log(newArray);
      }
    }
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
          <List listContent={myArray} moveListItem={moveListItem} />
        ) : (
          <p>list goes here</p>
        )}
      </div>
    </>
  );
}
