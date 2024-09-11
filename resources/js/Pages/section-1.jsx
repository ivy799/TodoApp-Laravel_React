import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Button from './Button';

export default function Section_1(props) {
    return (
        <div className={props.className}>
            <h1 className='text-white text-xl'><b>Ongoing</b></h1>
            <Button buttonTitle='Delete all' className='p-2 text-white rounded-full border-zinc-500'/>  
        </div>
    );
}
