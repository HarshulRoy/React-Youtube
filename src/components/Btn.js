import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-4 font-semibold text-sm tracking-tight py-1 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all'>
      {name}
    </button>
  )
}

export default Button
