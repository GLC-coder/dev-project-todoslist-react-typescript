import React, {useState} from 'react';
import Todo from '../models/todo'

type TodoObject = {
    items: Todo[];
    addTodo: (text: string)=> void;
    removeTodo: (id: string) => void;
}
const TodosContext = React.createContext<TodoObject>({
    items: [],
    addTodo : () => {},
    removeTodo : (id: string) => {},

});

type Props = {
    children? : React.ReactNode
}
export const TodosContextProvider: React.FC<Props> = (props)=> {
    const [todos, setTodos] =useState<Todo[]>([]);
    const addNewTextHandler = (enteredText: string) => {
        const newTodo = new Todo(enteredText);
        // setTodos(preState => [...preState, newTodo] )
        setTodos((preState) => preState.concat(newTodo));
      };
    
      const onRemoveHandler = (todoId: string) => {
        setTodos((preState) => preState.filter((todo) => todo.id !== todoId));
      };

      const todosContextValue : TodoObject = {
        items : todos,
        addTodo : addNewTextHandler,
        removeTodo : onRemoveHandler
      }

    return<TodosContext.Provider value={todosContextValue} >{props.children}</TodosContext.Provider>
}

export default TodosContext