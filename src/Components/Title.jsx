import React from 'react'

const Title = ({sectionName,titleName}) => {
  return (
    <div className='text-center gap-y-2.5 mb-[86px]'>
        <div className='font-oxa text-3xl font-bold text-primary'>{sectionName}</div>
        <div className='font-rale text-[40px] font-extrabold text-[#11111D]'>{titleName}</div>
    </div>
  )
}

export default Title