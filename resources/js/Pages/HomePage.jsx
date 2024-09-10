import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Section_1 from './section-1';
import MainSection from './mainSection';
import Section_2 from './section-2';

export default function HomePage(props){
  return(
    <div className='flex flex-row min-h-screen bg-zinc-800 p-3'>
      <Head title={props.title}/>
      <div className='flex-col basis-2/4 min-h-screen justify-around bg-white'>
        <MainSection className = "flex justify-center item-center flex-col text-white "/>
        <Section_1 className = "flex justify-between gap-x-4 w-full"/>
        <Section_2 className = "flex flex-col w-full justify-center items-center bg-neutral-800 text-white text-2xl rounded gap-y-3" task={props.task} />
      </div>
    </div>
  )
}
