import "./list.css";
import { ListItem } from "./ListItem";

interface IList {
  listContent: IListItem[];
  moveListItem: (id: number, move: string) => void;
  deleteListItem: (id: number) => void;
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
}: IList): JSX.Element {
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
                deleteListItem={deleteListItem}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
