import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Section_1 from './section-1';
import MainSection from './mainSection';
import Section_2 from './section-2';

export default function HomePage(props){
  console.log(props)
  return(
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <Head title={props.title}/>
      <MainSection />
      <Section_1 />
      <Section_2/>
    </div>
  )
}