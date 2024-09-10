import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Section_1 from './section-1';
import MainSection from './mainSection';
import Section_2 from './section-2';

export default function HomePage(props) {
  return (
    <div className='grid lg:grid-cols-12 min-h-screen bg-zinc-800 p-3 gap-5'>
      <Head title={props.title}/>
      <Head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /></Head>

      <div className='grid col-span-12 lg:col-span-6 p-3 content-start gap-y-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl'>
        <MainSection className="flex justify-center items-center flex-col text-white" />
        <Section_1 className="flex gap-x-4 w-full"/>
        <Section_2 className="flex flex-col w-full justify-center items-center text-white text-2xl rounded gap-y-3" task={props.task} />
      </div>
      
      <div className='grid col-span-12 lg:col-span-6 content-start gap-y-5'>
        <MainSection className="flex justify-center items-center flex-col text-white" />
        <Section_1 className="flex gap-x-4 w-full" />
        <Section_2 className="flex flex-col w-full justify-center items-center text-white text-2xl rounded gap-y-3" task={props.task} />
      </div>
    </div>
  );
}
