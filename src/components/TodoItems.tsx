import Todo from "../types/todo"


interface TodoItemsProps{
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

function TodoItems( {todo, onCompletedChange, onDelete} : TodoItemsProps) {

    return (
        <div>
            <label className="border rounded-md flex justify-between items-center gap-2 p-2 px-3 border-gray-300 bg-white hover:bg-slate-50">
                <div className="flex items-center gap-2">
                    <input 
                    type="checkbox"
                    checked={todo.completed}
                    className="scale-125 accent-gray-500 cursor-pointer"
                    onChange = {(e) => onCompletedChange(todo.id, e.target.checked)}
                    />
                    <span className={ todo.completed ? " ml-2 text-gray-300 line-through " : "ml-2"}>
                        {todo.title}
                    </span>
                </div>
                
                <button 
                    onClick={() => onDelete(todo.id)}
                    className="cursor-pointer bg-gray-300 rounded-md py-1 px-3 hover:bg-gray-200 active:bg-gray-100 select-none"> 
                    🗑️
                </button>
            </label>
        </div>
    )
}

export default TodoItems; 