import React from "react";
import { useState, useEffect } from "react";
import "./Todo.css";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";

const SAVED_ITEMS = "savedItems";

function Todo() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

    console.log(savedItems);

    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    let it = new Item(text);
    setItems([...items, it]);
  }

  function onItemDeleted(item) {
    let filteredItems = items.filter((it) => it.id !== item.id);

    setItems(filteredItems);
  }

  function onDone(item) {
    let updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });

    setItems(updatedItems);
  }

  return (
    <>
      <header className="hero">
        <div className="container">
          <h1 className="main-title">LISTA DE TAREFAS</h1>
          <img alt="person in work" src="./assets/hero-img.png"></img>
        </div>
      </header>
      <div className="container">
        <TodoForm onAddItem={onAddItem}></TodoForm>

        <h4 className="subtitle">Atividades</h4>

        <List
          onDone={onDone}
          onItemDeleted={onItemDeleted}
          items={items}
        ></List>
      </div>
    </>
  );
}

export default Todo;
