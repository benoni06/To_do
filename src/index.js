import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Todo } from './Todo';
import { TodoList } from './TodoList';
import axios from 'axios'

function App() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");
    const TodoListApi = () => {

		axios.get('http://localhost:3000/about').then((response) => {
        console.log(response); 
        const {data} = response;
			
			setTasks(data);
      })
	};

    const taskValueChange = (val) => {
        setText(val);
    };
    useEffect(()=>{
        TodoListApi();
    })
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
        <div id = "container">
          
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
            

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));