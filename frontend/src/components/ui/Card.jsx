import React from 'react'

const Card = ({ children }) => {
  return (
    <div className='group rounded-3xl border border-stroke-secondary bg-gray-50 p-1 duration-200 hover:border-primary-200 hover:bg-primary-25 md:p-2"'>
        <div className='bg-white relative h-full rounded-2xl border border-[#F2F4F7] p-4 md:p-6'>
            {children}
        </div>
    </div>
  )
}

export default Card