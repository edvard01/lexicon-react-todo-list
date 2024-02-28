import "./list.css";

interface IList {
  listContent: IListItem[];
}

interface IListItem {
  id: number;
  text: string;
  author: string;
}

export function List({ listContent }: IList): JSX.Element {
  return (
    <>
      <div className="list">
        <ul>
          {listContent.map((item, index) => (
            <li key={index}>
              <span className="text-area">
                <p className="todo-text">{item.text}</p>
                <p className="owner-text">{item.author}</p>
              </span>
              <span className="nav-btn-area">
                <button id="edit">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button id="delete">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
