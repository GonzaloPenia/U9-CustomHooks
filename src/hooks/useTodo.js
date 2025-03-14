import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    }

export const useTodo = ( InitialState = {} ) => { 


    const [todos, dispatch] = useReducer( todoReducer, InitialState, init );
    
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos) );
    }, [todos])
    
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }    
        dispatch(action);
    }
    
    const handleDeleteTodo = ( id ) => {
        dispatch ({
            type: '[TODO] Remove Todo',
            payload: id
        })    
    }

    const handleToggleTodo = (id) => {
        dispatch ({
            type: '[TODO] Toggle Todo',
            payload: id
        })   
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo=> !todo.done).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}