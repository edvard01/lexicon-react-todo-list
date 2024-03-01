import "./list.css";
import { ListItem } from "./ListItem";

interface IList {
  listContent: IListItem[];
  moveListItem: (id: number, move: string) => void;
  deleteListItem: (id: number) => void;
  changeTodo: (newTodo: string, id: number) => void;
}

interface IListItem {
  id: number;
  text: string;
  author: string;
}

export function List({
  listContent,
  moveListItem,
  deleteListItem,
  changeTodo,
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
              moveListItem={moveListItem}
              deleteListItem={deleteListItem}
              changeTodo={changeTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
