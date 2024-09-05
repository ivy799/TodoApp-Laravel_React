import React from 'react';
import { Link, Head } from '@inertiajs/react';
import TaskItem from './TaskItem';  // Mengimpor komponen TaskItem

export default function Section_2(props) {
  return (
    <div className='flex flex-col w-2/4 justify-center items-center bg-neutral-800 text-white text-2xl rounded p-5 gap-y-3'>
      <Head title={props.title} />
      {props.task && props.task.length > 0 ? (
        props.task.map((data, i) => {
          return (
            <TaskItem key={i} task={data.task} />  // Menggunakan TaskItem untuk setiap tugas
          );
        })
      ) : (
        <p>Saat Ini Belum Ada Task Tersedia</p>
      )}
    </div>
  );
}
