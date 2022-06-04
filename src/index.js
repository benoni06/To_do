import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Todo } from './Todo';
import { TodoList } from './TodoList';

function App() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");


    const taskValueChange = (val) => {
        setText(val);
    };
    useEffect(()=>{
        let temp=localStorage.getItem("tasks");
        console.log(temp);
        if(temp){
            setTasks(JSON.parse(temp));
        }
    },[]);
    const addTask = () => {
        setTasks([...tasks, { id: nanoid(), name: text, checked: false }]);
        setText("");
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
    const checked = (id) => {
        tasks.map((task) => {
            if (task.id === id) { task.checked = !task.checked; }
        })
        setTasks([...tasks])
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
    const deleteTask = (id) => {
        const tasks_array = tasks.filter(task => task.id !== id);
        setTasks(tasks_array);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
    return (
        <>
          
            <div className='centered'>
                <h1>To-Do List</h1>
            </div>
            <br></br>
            <div className='centered'>
               
                <Todo
                 text={text}
                 taskValueChange={taskValueChange}
                 addTask={addTask}
                 setFilter={setFilter}

                />
                
                <TodoList
                   filter={filter}
                   checked={checked}
                   deleteTask={deleteTask}
                   tasks={tasks}
                   />
            </div>
            

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));