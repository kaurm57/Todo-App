import dummyData from "./data/todos"
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean){
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo
    ))) ; // basically in the beginning todos == dummystate and prevTodo == todos. also {...todo, completed} is shorthand for completed: completed. 
  }

  function addTodo (title: string){
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
      ... prevTodos
    ])
  }

  function deleteTodo(id: number){
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id))
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">
        Your todos
      </h1>
      <div className="mx-w-lg mx-auto px-10 bg-slate-100 rounded-md p-5 space-y-5">
        <AddTodoForm 
          onSubmit={addTodo}/>
        <TodoList 
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}/>
      </div>
    </main>
 );
}

export default App;

/* Summary Flow:
User clicks a checkbox.
The onChange event triggers the function: onCompletedChange(todo.id, e.target.checked).
onCompletedChange calls setTodoCompleted(id, completed) in the App.tsx component.
setTodoCompleted updates the state (todos) by modifying the relevant todo item.
The state (todos) is updated using setTodos.
React re-renders the component, and the checkbox reflects the updated state (checked or unchecked).
 */