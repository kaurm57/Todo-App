import dummyData from "./data/todos"
import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  const [todos, setTodos] = useState(dummyData);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])  //used whenever state fo the todos changes

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


  return (
    <main className="py-10 h-screen space-y-5  overflow-y-auto">
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
      <TodoSummary 
        todos={todos}
        deleteAllCompleted={deleteCompletedTodos}/>
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