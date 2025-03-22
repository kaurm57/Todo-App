import TodoItems from "./TodoItems";
import Todo from "../types/todo";

interface TodoListProps{
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

function TodoList({todos, onCompletedChange, onDelete}: TodoListProps){
    return(
        <div className="space-y-2">
          {todos.map( todo => (
            <TodoItems 
            key = {todo.id} 
            todo={todo} 
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}/>
          ))}
        </div>
    )
}

export default TodoList;