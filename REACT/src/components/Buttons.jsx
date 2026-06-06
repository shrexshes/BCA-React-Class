import React from 'react'

const PrimaryButton = ({title}) => {
  return (
    <div className='bg-red-500 text-white px-5 py-2 m-2 rounded-full w-fit hover:bg-blue-300 hover:text-black '>{title}</div>
  )
}

export default PrimaryButton