import React from 'react'

const MultipleTab = ({tabs}) => {
  return (
    <div className='mt-10 border-b'>
        <ul className='flex flex-row space-x-4'>
            {
                tabs.map((item, index)=><li className={`font-semibold px-5 ${index === 0 ? 'text-emerald-500 border-b-2 border-emerald-500':'text-gray-400'}`}>{item}</li>)
            }
        </ul>
    </div>
  )
}

export default MultipleTab