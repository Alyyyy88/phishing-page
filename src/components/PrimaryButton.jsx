import React from 'react'

export const PrimaryButton = ({children}) => {
  return (
    <div>
    <button className='text-lg cursor-pointer bg-[#0f4b8f] text-white w-80 rounded-[15px] pt-[10px] px-[26px] pb-[12px]'>
      {children}
    </button>
  </div>
  )
}
