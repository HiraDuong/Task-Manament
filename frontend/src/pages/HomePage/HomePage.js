import React, { useState } from 'react';
import './HomePage.css';
import TaskItems from '../../components/TaskItems/TaskItems';
import '../../styles/global.css';

const HomePage = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', description: 'This is task 1' },
        { id: 2, name: 'Task 2', description: 'This is task 2' },
        { id: 3, name: 'Task 3', description: 'This is task 3' },
    ]);

    const today = new Date();
    const dateString = today.toLocaleDateString();
    return (
        <div className='HomePage'>
            Today is {dateString}.
            <br />
            Tasks for today: 

            <TaskItems tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default HomePage;