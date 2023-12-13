import React, { useState } from "react";
import "./TodoForm.css"

function TodoForm(props) {

  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form className="form-container">
      <input placeholder="Insira aqui a sua atividade" className="input-task" onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItem}>
        <img alt="icon plus button" src="./assets/button-plus.png"></img>
        Adicionar atividade</button>
    </form>
  );
}

export default TodoForm;
