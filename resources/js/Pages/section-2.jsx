import React from 'react';
import { Link, Head } from '@inertiajs/react';
import TaskItem from './TaskItem'; // Import TaskItem

export default function Section_2(props) {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-neutral-800 text-white text-2xl'>
      <Head title={props.title} />
      {props.task && props.task.length > 0 ? (
        props.task.map((data, i) => (
          <TaskItem key={i} task={data.task} /> // Gunakan komponen TaskItem
        ))
      ) : (
        <p>Saat Ini Belum Ada task Tersedia</p>
      )}
    </div>
  );
}
