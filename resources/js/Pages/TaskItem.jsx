import React from 'react';
import Button from './Button';

export default function TaskItem({ task }) {
  return (
    <div className='flex justify-between items-center w-full p-2 pl-5 text-white rounded-full border-solid border-2 border-zinc-500'>
      <p className='text-xl'>{task}</p>
      <div className='flex gap-2'>
        <Button buttonTitle={<span class="material-symbols-outlined">edit</span>} className='flex justify-center items-center'/>
        <Button buttonTitle={<span class="material-symbols-outlined">delete</span>} className='flex justify-center items-center'/>
      </div>
    </div>
  );
}
