import React from 'react'

export default function MainTitle({text,title}) {
  return <>
    <div className='text-center'>
        <p className='font-light'>{text}</p>
        <h3 className='font-medium text-[30px]'>{title}</h3>
    </div>
  </>
}
