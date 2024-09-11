import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import TaskItem from './TaskItem';  // Mengimpor komponen TaskItem

export default function Section_2(props) {
  const [tasks, setTasks] = useState(props.task || []);

  // Callback untuk menghapus task dari state
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={props.className}>
      <Head title={props.title} />
      {tasks.length > 0 ? (
        tasks.map((data) => {
          return (
            <TaskItem key={data.id} task={data.task} taskId={data.id} onDelete={handleDelete} />
          );
        })
      ) : (
        <p>Saat Ini Belum Ada Task Tersedia</p>
      )}
    </div>
  );
}
