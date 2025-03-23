import Todo from '../types/todo';

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps){
    const completedTodos = todos.filter(todo => todo.completed);

    return(
        <div className='text-center space-y-2'>
            <p className='text-sm text-center text-gray-500'>
                {completedTodos.length}/{todos.length} tasks completed ✅
            </p>

            {completedTodos.length > 0 && (
                    <button
                    onClick = {deleteAllCompleted}
                    className='text-red-500 bg-gray-300 rounded-md p-2 hover:text-red-400 hover:bg-gray-200 cursor-pointer text-sm font-medium'
                    >
                        Delete all completed tasks.
                    </button>
                )
            }
        </div>
    )
}

export default TodoSummary;