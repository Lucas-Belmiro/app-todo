import React from "react";
import "./List.css";
import ListItem from "./ListItem";


function List(props) {
  return (
    <ul className="list-items">
      {props.items.map(item => <ListItem key={item.id} item = {item} onDone={props.onDone} onItemDeleted = {props.onItemDeleted}></ListItem>)}
    </ul>
  );
}

export default List;
