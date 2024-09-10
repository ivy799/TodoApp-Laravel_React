import React from 'react';
import { Link, Head } from '@inertiajs/react';
import TaskItem from './TaskItem';  // Mengimpor komponen TaskItem

export default function Section_2(props) {
  return (
    <div className={props.className}>
      <Head title={props.title} />
      {props.task && props.task.length > 0 ? (
        props.task.map((data, i) => {
          return (
            <TaskItem key={i} task={data.task} />
          );
        })
      ) : (
        <p>Saat Ini Belum Ada Task Tersedia</p>
      )}
    </div>
  );
}
