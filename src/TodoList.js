export const TodoList =({filter,checked,deleteTask,tasks}) => {
    return(
    
    <div>
        <br></br>
    <div >
        {tasks.map(task => {
            
                if (filter === "All") {
                    return (

                <>
                <div className="todo">
                    
                        
                        <p key={task.id}></p>
                        <input type="checkbox"  checked={task.checked} onClick={() => checked(task.id)} />

                        {task.checked ? <span className="cut">{task.name}</span> : <span>{task.name}</span>}
                        <a href="#" onClick={() => deleteTask(task.id)}> delete</a>
                        <br></br>
                    </div>
                    
                </>
                )
                }
                if (filter === "done" && task.checked) {
                    return (
                <>
                <div className="todo">
                    
                    
                        <p key={task.id}></p>
                        <input type="checkbox" onClick={() => checked(task.id)} />

                        {task.checked ? <span className="cut">{task.name}</span> : <span>{task.name}</span>}
                        <a href="#" onClick={() => deleteTask(task.id)}> delete</a>
                        <br></br>
                    </div>
                    
                </>
                )
                }
                if (filter === "not done" && !task.checked) {
                    return (
                <>
                   <div className="todo">
                    
                    
                        <p key={task.id}></p>
                        <input type="checkbox" onClick={() => checked(task.id)} />

                        {task.checked ? <span className="cut">{task.name}</span> : <span>{task.name}</span>}
                        <a href="#" onClick={() => deleteTask(task.id)}> delete</a>
                        <br></br>
                    </div>
                    
                </>
                )
                }
                })}
      </div>
    </div>


    )
}