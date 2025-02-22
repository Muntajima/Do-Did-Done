import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Povider/AuthProvider';
import TaskCard from '../TaskCard/TaskCard';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

const Tasks = () => {
    const { loading } = useContext(AuthContext);
    const tasks = useLoaderData() || {};
    const [allTasks, setAllTasks] = useState([]);
    //console.log(tasks)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:5000/tasks');
                const data = await response.json();
                setAllTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchTasks();
    }, [])

    const onDragEnd = (result) => {
        if (!result.destination) return; // If dropped outside, do nothing
        const reorderedTasks = [...allTasks];
        const [movedTask] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, movedTask);

        setAllTasks(reorderedTasks);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-6">Arrange Your To-do List</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                        <div 
                            ref={provided.innerRef} 
                            {...provided.droppableProps} 
                            className="border-2 w-96 mx-auto"
                        >
                            <h2 className="card-title justify-center pt-2">TODO</h2>
                            <div>
                                {allTasks.map((task, index) => (
                                    <TaskCard key={task._id} task={task} index={index}
                                    allTasks={allTasks}
                                    setAllTasks={setAllTasks} />
                                ))}
                                {provided.placeholder}
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        </div>
    );
};

export default Tasks;