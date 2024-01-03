import React, { useEffect, useState } from 'react';
import './HomePage.css';
import TaskItems from '../../components/TaskItems/TaskItems';
import '../../styles/global.css';
import { useUser } from '../../UserContext';
import { APIpath } from '../../config/APIpath';
import moment from 'moment';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    const {user} = useUser()

    const today = new Date();
    const dateString = today.toLocaleDateString();
    console.log('tasks', tasks)
    // call API to get all tasks of user
    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await fetch(`${APIpath}/tasks/${user.user_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                setTasks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getTasks();
    }, [user.user_id]);

    return (
        <div className='HomePage'>
            Today is {moment (dateString,'DD/MM/YYYY').format('dddd, DD/MM/YYYY')}
            <br />
            Tasks for today: 

            <TaskItems tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default HomePage;