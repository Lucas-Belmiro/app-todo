import React from "react";
import "../List/List.css";
import Card from "../Card/Card";

function DoneImg(props) {
  if (props.done) {
    return (
      <img className="icon-button" alt="done" src="./assets/images/botão-ativo.svg"></img>
    );
  } else {
    return (
      <img className="icon-button" alt="undone" src="./assets/images/botão-inativo.svg"></img>
    );
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}

        <div className="buttons-actions">
          <button
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button
            onClick={() => {
              props.onItemDeleted(props.item);
            }}
          >
            <img
              className="icon-button-trash"
              alt="delete Item"
              src="./assets/images/lixeira.svg"
            ></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
