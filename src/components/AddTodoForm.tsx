import React, { useState } from "react";

interface AddTodoFormProps{
    onSubmit: (title: string) => void;
}

function AddTodoForm({onSubmit}: AddTodoFormProps){

    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if (!input.trim()){
            return;
        }

        onSubmit(input);
        setInput("");
    }

    return (
        <form className="flex" onSubmit={(handleSubmit)}>
            <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add new task" 
            className="rounded-s-md bg-white grow border border-gray-400 focus:border-gray-600 focus:outline-none p-2"/>
            <button type="submit" 
                className="rounded-e-md bg-gray-500 px-5 text-white hover:bg-gray-400 active:bg-gray-300">
                Add
            </button>
        </form>
    )
}

export default AddTodoForm;