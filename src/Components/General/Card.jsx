import React, { Children } from 'react'

const Card = ({children , className}) => {
  return (
    <div className={` ${ className && className} w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow`}>
        {children}
    </div>
  )
}

export default Card