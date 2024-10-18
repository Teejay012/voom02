import React from 'react'

const Loading = () => {
  return (
    <div className='absolute top-[-10px] w-[410px] left-[-10px] h-screen bg-secondary-color flex items-center justify-center'>
        <div className='flex items-center justify-center gap-2'>
            <h1 className='text-[#fff] text-[25px] font-bold'>V</h1>
            <div className="w-8 h-8 border-4 border-t-4 border-[#fff] border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-4 border-t-4 border-[#fff] border-t-transparent rounded-full animate-spin"></div>
            <h1 className='text-[#fff] text-[25px] font-bold'>M</h1>
        </div>
    </div>
  )
}

export default Loading