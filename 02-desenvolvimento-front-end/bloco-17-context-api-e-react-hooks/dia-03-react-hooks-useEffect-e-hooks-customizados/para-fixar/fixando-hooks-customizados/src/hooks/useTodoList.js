import { useState } from "react";

function useTodoList() {
  const [todoList, setTodoList] = useState([]);

  const addTodos = (task) => {
    setTodoList(state => [...state, task]);
  }

   return { todoList, addTodos  };
}
 
export default useTodoList;
