import Todo from "./Todo";

const Todolist = ({ todos }) => {
    
    
    return (
        <ul className="todo-list">
            { todos.map((todo, index) => <Todo 
                                            key={ todo.id } 
                                            index={ index } 
                                            todo={ todo }
                                           
                                           
                                        />
                        )
            }
            
        </ul>
    );
}

export default Todolist;