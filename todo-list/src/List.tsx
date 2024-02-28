import "./list.css";
import { ListItem } from "./ListItem";

interface IList {
  listContent: IListItem[];
  moveListItem: (id: number, move: string) => void;
}

interface IListItem {
  id: number;
  text: string;
  author: string;
}

export function List({ listContent, moveListItem }: IList): JSX.Element {
  return (
    <>
      <div className="list">
        <ul>
          {listContent.map((item, index) => (
            <li key={index}>
              <ListItem
                todo={item.text}
                owner={item.author}
                id={item.id}
                moveListItem={moveListItem}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
