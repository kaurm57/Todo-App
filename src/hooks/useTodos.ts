import { useEffect, useState } from "react";
import Todo from "../types/todo";
import dummyData from "../data/todos";

function useTodo(){
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]')
        return savedTodos.length > 0 ? savedTodos : dummyData; //if there are no todos in the local storage then it will use the dummyData
      });
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos])  //used whenever state of the todos changes to store the current one.
    
      function setTodoCompleted(id: number, completed: boolean){
        setTodos(prevTodos => 
          prevTodos.map(todo => (todo.id === id ? {...todo, completed} : todo
        ))) ; // basically in the beginning todos == dummystate and prevTodo == todos. also {...todo, completed} is shorthand for completed: completed. 
      }
    
      function addTodo (title: string){
        setTodos((prevTodos) => [
          {
            id: Date.now(),  //this was changed from lenght + 1 bcz length keeps changing if deleted which leads to multiple task with same id causing bugggin when deleting. Date.now would give unique because it goes to milliseconds
            title,
            completed: false
          },
          ... prevTodos
        ])
      }
    
      function deleteTodo(id: number){
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id))
      }
    
      function deleteCompletedTodos(){
        setTodos(
          prevTodos => prevTodos.filter(todo => !todo.completed)
        )
      }

      return {todos, setTodoCompleted, addTodo, deleteTodo, deleteCompletedTodos};
    
}

export default useTodo;