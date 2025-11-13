import React from 'react'

function Button({value}) {
  return (
    <div>
      <button className='p-2 mt-3 rounded bg-gray-200 hover:bg-gray-300 transition'>{value}</button>
    </div>
  )
}

export default Button
