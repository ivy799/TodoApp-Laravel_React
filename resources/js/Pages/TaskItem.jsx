import React from 'react';
import axios from 'axios';
import Button from './Button';

export default function TaskItem({ task, taskId, onDelete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/todoApp/${taskId}`, {
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      });
      if (onDelete) {
        onDelete(taskId);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className='flex justify-between items-center w-full p-2 pl-5 text-white rounded-full border-solid border-2 border-zinc-500'>
      <p className='text-xl'>{task}</p>
      <div className='flex gap-2'>
        <Button buttonTitle={<span className="material-symbols-outlined">edit</span>} className='flex justify-center items-center'/>
        <button onClick={handleDelete} className='flex justify-center items-center'>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
