import React, { useRef, useContext } from "react";
import TodosContext from "../store/todos-context";

import styles from './NewTodo.module.css'


const NewTodo = ():JSX.Element => {
  const todosCtx = useContext(TodosContext)
  const textInputRef = useRef<HTMLInputElement>(null);

  const addNewTextHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredInput = textInputRef.current!.value
    if(enteredInput.trim().length === 0) {
        throw new Error('Input value shold not be empty!')
    }
    todosCtx.addTodo(enteredInput)
  };

  return (
    <form className={styles.form} onSubmit={addNewTextHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text"  ref={textInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
