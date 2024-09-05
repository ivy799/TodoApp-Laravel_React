import React from 'react';
import Button from './Button';

export default function TaskItem({ task }) {
  return (
    <div className='flex justify-between items-center w-full p-2 bg-black text-white rounded'>
      <h3>{task}</h3>
      <div className='flex gap-2'>
        <Button buttonTitle='Edit' className='bg-blue-400 p-1 rounded' />
        <Button buttonTitle='Delete' className='bg-red-600 p-1 rounded'/>
      </div>
    </div>
  );
}
