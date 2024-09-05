import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function HomePage(props){
  return(
    <div className='flex justify-center item-center min-h-screen'>
      <Head title={props.title}/>
      <h1>TODO LIST</h1>
    </div>
  )
}