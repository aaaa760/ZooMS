import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-cyan-400 text-white py-2 px-6 rounded-full hover:bg-cyan-500 
    hover:duration-500 hover:text-purple-800' onClick={props.func}>
      {props.children}
    </button>
  )
}

export default Button