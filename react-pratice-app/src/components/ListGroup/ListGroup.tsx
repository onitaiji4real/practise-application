import { useState } from "react";
import styles from "./ListGroup.module.css";

function ListGroup() {
  const items = ["New York", "San Francisco", "Toyoko", "Taiwan"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && "No item found."}
      <ul className={[styles.listGroup, styles.container].join()}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
