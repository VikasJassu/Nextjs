'use client'
import React from 'react'
import useToast from '../../contexts/userContext';

const Page = () => {
  const {showToast} = useToast();
  return (
    <div className='flex justify-center items-center'>
        <button onClick={()=> {showToast("success", "done")}} className='bg-slate-300 p-2 rounded-lg mt-24'>Click to see toast</button>
    </div>
  )
}

export default Page