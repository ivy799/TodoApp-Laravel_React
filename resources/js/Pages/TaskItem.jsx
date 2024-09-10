import React from 'react';
import Button from './Button';

export default function TaskItem({ task }) {
  return (
    <div className='flex justify-between items-center w-full p-2 pl-5 text-white rounded-full border-solid border-2 border-zinc-500'>
      <h5>{task}</h5>
      {/* p-2 text-white rounded-full border-solid border-2 border-zinc-500 */}
      <div className='flex gap-2'>
        <Button buttonTitle='Edit' className='bg-blue-400 p-1 rounded-full' />
        <Button buttonTitle='Delete' className='bg-red-600 p-1 rounded-full'/>
      </div>
    </div>
  );
}
