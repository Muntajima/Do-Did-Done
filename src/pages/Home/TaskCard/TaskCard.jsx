import React, { useEffect, useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, index, allTasks, setAllTasks }) => {
    const handleDelete = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) =>{
            if(result.isConfirmed){
                fetch( `http://localhost:5000/tasks/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your campaign has been deleted.",
                            icon: "success"
                          });
                          
                          const remaining = allTasks.filter(item => item._id !== _id);
                          setAllTasks(remaining);
                    }
                })
            }
          })
    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <Draggable draggableId={task._id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="card bg-base-100 w-80 shadow-xl text-left my-2"
                >
                    <div className="card-body">
                        <div className='flex gap-8'>
                            <h2 className='card-title'>{task.title}</h2>
                            <p className='text-lg w-10 h-10 border-2 rounded-full text-center font-bold'>{index}</p>
                        </div>
                        <p>{task.description}</p>
                        <h3><strong>Time: </strong>{task.timestamp}</h3>
                        <h3><strong>Category: </strong>{task.category}</h3>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(task._id)} className="btn btn-ghost text-2xl"><FaDeleteLeft /></button>
                            <Link to={`/dashboard/update/${task._id}`} className="btn btn-ghost text-2xl"><FaEdit /></Link>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
        </div>
    );
};

export default TaskCard;