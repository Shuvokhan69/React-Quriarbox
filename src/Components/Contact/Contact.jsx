import React from 'react'
import Container from '../Container'
import contactImg from '../../assets/contactImg.png'
import {FaPaperPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-[#bff0fe]'>
        <Container className='py-16 lg:py-[170px]'>
            <div className='lg:w-[872px] mx-auto lg:flex text-center lg:text-left'>
                <div className='w-auto lg:w-1/2'>
                    <img src={contactImg} alt="contactImg" className='mx-auto lg:mx-0' />
                    <h3 className='font-oxa text-2xl font-bold text-primary'>REQUEST A CALLBACK</h3>
                    <h2 className='font-rale text-[36px] font-extrabold text-secondary  '>We will contact in the shortest time.</h2>
                    <p className='font-rale font-semibold text-2xl text-[#9291A1]'>Monday to Friday, 9am-5pm.</p>
                </div>
                <div className='w-auto lg:w-1/2 text-center mx-auto'>
                    <input className='bg-[#FFF6E6]  py-4 pl-5 pr-[150px] lg:pr-[220px] mt-10 border-2 border-[#C5C5D2] rounded-md outline-[#C5C5D2] ' type="text" placeholder='Name' />
                    <input className='mx-auto block bg-[#FFF6E6]  py-4 pl-5 pr-[150px]  lg:pr-[220px] my-4 border-2 border-[#C5C5D2] rounded-md outline-[#C5C5D2]  ' type="text" placeholder='Email' />
                    <input className='mx-auto block bg-[#FFF6E6]  pt-3.5 pl-5 pr-[150px]  lg:pr-[220px] pb-[118px] border-2 border-[#C5C5D2] rounded-md outline-[#C5C5D2]  ' type="text" placeholder='Message' />
                    <button className='mx-auto block px-24 py-3 lg:px-[131px] bg-primary text-white font-oxa text-xl font-black rounded-md mt-[54px]'>Send Message <FaPaperPlane className='inline-block'/></button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Contact