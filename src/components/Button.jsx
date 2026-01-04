import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-500'>{props.name}</button>
    </div>
  )
}

export default Button
