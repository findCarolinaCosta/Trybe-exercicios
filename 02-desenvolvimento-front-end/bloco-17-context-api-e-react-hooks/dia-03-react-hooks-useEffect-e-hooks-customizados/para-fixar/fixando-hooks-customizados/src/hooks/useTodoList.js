import { useState } from "react";

function useTodoList() {
  const [todoList, setTodoList] = useState([]);

  const addTodos = (task) => {
    setTodoList(todoList.concat(task))
  }

   return { todoList, addTodos  };
}
 
export default useTodoList;