// import React from 'react'

function Button(props) {

    console.log(props)

  return (
    <button
    type='button'
    className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-600 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
    onClick={props.func}
    >{props.operador}</button>
  )
}

export default Button