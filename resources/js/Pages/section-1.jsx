import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Button from './Button';

export default function Section_1(props) {
    return (
        <div className='flex justify-between p-2 gap-x-4 w-2/4 bg-white text-black'>
            <Button buttonTitle='Add task' className='p-2 bg-blue-600 text-white rounded'/>
            <Button buttonTitle='Delete all' className='p-2 bg-black text-white rounded'/>  
        </div>
    );
}
