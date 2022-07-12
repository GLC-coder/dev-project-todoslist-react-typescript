import React, {useContext} from "react";
import TodosContext from "../store/todos-context";
import styles from "./TodoItem.module.css";
type Props = {
  text: string;
  id: string;
};
const TodoItem: React.FC<Props> = (props) => {
  const todosCtx= useContext(TodosContext)
  return (
    <li
      className={styles.item}
        onClick={todosCtx.removeTodo.bind(null,props.id)}
    //   onClick={() => {
    //     todosCtx.removeTodo(props.id);
    //   }}
    >
      {props.text}
    </li>
  );
};
export default TodoItem;
