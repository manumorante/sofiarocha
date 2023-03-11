function List({ children, humanize }) {
  return <ul>{children}</ul>
}

function Item({ children }) {
  return <li>{children}</li>
}

List.Item = Item
export default List
