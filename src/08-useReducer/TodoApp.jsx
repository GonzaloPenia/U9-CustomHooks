import { useTodo } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

const {todos, todosCount, pendingTodosCount,handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();

return (
        <>  
            <h1>Todo App: {todos.length} <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />    
                <div className="row">
                        <div className="col-7">
                            <TodoList 
                                todos={todos} 
                                onDeleteTodo = {handleDeleteTodo} 
                                onToggleTodo = {handleToggleTodo}
                            />                   
                        </div>

                        <div className="col-5">                
                            <TodoAdd onNewTodo={handleNewTodo} />
                        </div>
                </div>
        </>
    )
}


