import React from 'react'
import Container from '../Container'
import bannerImg from '../../assets/sss.png'
import {FiArrowRight} from 'react-icons/fi'

const Banner = () => {
  return (
    <div className='bg-[#bff0fe]'>
        <Container className='py-14 lg:py-[170px]'>
            <div className='lg:flex text-center lg:text-left'>
                <div className='lg:w-[35%]'>
                    <h1 className='font-rale text-[#261134] ml-4  text-5xl'>Welcome to Our Fastest <span className='font-extrabold'>courier services.</span></h1>
                    <p className='font-rale text-xl text-[#4D4D4D] lg:w-[330px] mt-4 ml-4 mb-10'>Your Product's Trusted Assistant for Home Delivery to Customers.</p>
                    <button className='mb-5 lg:mb-0 px-5 py-3  bg-primary  rounded-2xl text-[#ffff] text-xl  ml-4 font-oxa'>Get started <FiArrowRight className='inline-block'/> </button>
                </div>
                <div className='lg:w-[65%]'>
                    <img src={bannerImg} alt="banner" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner