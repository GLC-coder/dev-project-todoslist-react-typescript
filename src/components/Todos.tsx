import React, {useContext} from "react";
import TodoItem from "./TodoItem";

import TodosContext from "../store/todos-context";

import styles from "./Todos.module.css";


const Todos = (): JSX.Element => {

  const todosCtx = useContext(TodosContext)
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
        
        />
      ))}
    </ul>
  );
};
export default Todos;
