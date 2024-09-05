import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Section_1 from './section-1';
import MainSection from './mainSection';

export default function HomePage(props){
  return(
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <Head title={props.title}/>
      <MainSection />
      <Section_1 />
    </div>
  )
}