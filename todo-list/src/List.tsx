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
      <div>
        <ul>
          {listContent.map((item, index) => (
            <li key={index}>
              <p>{item.text}</p>
              <p>{item.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
