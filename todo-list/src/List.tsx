import "./list.css";
import { ListItem } from "./ListItem";

interface IList {
  listContent: IListItem[];
  moveListItem: (id: number, move: string) => void;
  deleteListItem: (id: number) => void;
  changeTodo: (newTodo: string, id: number) => void;
  setDone: (id: number) => void;
}

interface IListItem {
  id: number;
  text: string;
  author: string;
  done: boolean;
  date: string;
}

export function List({
  listContent,
  moveListItem,
  deleteListItem,
  changeTodo,
  setDone,
}: IList): JSX.Element {
  return (
    <>
      <div className="list">
        <ul>
          {listContent.map((item, index) => (
            <ListItem
              key={index}
              todo={item.text}
              owner={item.author}
              id={item.id}
              done={item.done}
              date={item.date}
              moveListItem={moveListItem}
              deleteListItem={deleteListItem}
              changeTodo={changeTodo}
              setDone={setDone}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
