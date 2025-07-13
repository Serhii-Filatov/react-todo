import "./List.scss";

const List = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li className={item.active ? "active" : ""}>
          {item.icon ? (
            <i>{item.icon}</i>
          ) : (
            <div className="wrapper">
              <i className={`badge badge--${item.color}`}></i>
            </div>
          )}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
