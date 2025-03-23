import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {

  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteCompletedTodos
  } = useTodos();

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