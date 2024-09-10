import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Button from './Button';

export default function Section_1(props) {
    return (
        <div className={props.className}>
            <Button buttonTitle='Add task' className='p-2 text-white rounded-full border-solid border-2 border-zinc-500'/>
            <Button buttonTitle='Delete all' className='p-2 text-white rounded-full border-solid border-2 border-zinc-500'/>  
        </div>
    );
}
