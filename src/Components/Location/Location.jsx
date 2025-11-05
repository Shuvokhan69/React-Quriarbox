import React from 'react'
import Container from '../Container'
import Title from '../Title'
import Flex from '../Flex'
import { TiLocationOutline } from 'react-icons/ti'
import { CiClock2 } from 'react-icons/ci'
import { FiMail } from 'react-icons/fi'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { ImPhone } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'

const Location = () => {
    return (
        <div className='bg-[#bff0fe]'>
            <Container className='pb-[183px]'>
                <Title sectionName='FIND US' titleName='Access us easily' />
                <div className='lg:flex gap-x-6'>
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22074.269428911033!2d90.37594822288894!3d23.81598100566783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1762252922505!5m2!1sen!2sbd"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className='bg-white pt-20 pl-6 lg:pl-[60px] pb-[88px] rounded-2xl mx-auto lg:pr-20'>
                        <h5 className='font-rale  text-lg lg:text-xl font-bold text-[#464558] mb-10'>Contact with us</h5>
                        <Flex className='items-center gap-x-3.5 mb-4' >
                            <TiLocationOutline className='text-[#FFAF0F] text-3xl' />
                            <p className='text-base font-rale text-[#5C5B6C]'>Mirpur 10</p>
                        </Flex>
                        <Flex className='items-center gap-x-3.5 mb-4' >
                            <CiClock2 className='text-[#FFAF0F] text-3xl' />
                            <p className='text-base font-rale text-[#5C5B6C]'>Monday - Friday: 10 am - 10pm  <span className='block'>Sunday: 11 am - 9pm</span></p>
                        </Flex>
                        <Flex className='items-center gap-x-3.5' >
                            <FiMail className='text-[#FFAF0F] text-3xl' />
                            <p className='text-base font-rale text-[#5C5B6C]'>fastdelivery@example.com</p>
                        </Flex>
                        <div className='flex mt-[51px] gap-x-6'>
                            <FaFacebookSquare className='text-[22px] text-[#EBEBF5] hover:text-primary duration-300' />
                            <AiFillInstagram className='text-[22px] text-[#EBEBF5] hover:text-primary duration-300' />
                            <FaTwitterSquare className='text-[22px] text-[#EBEBF5] hover:text-primary duration-300' />
                        </div>
                    </div>
                </div>
                <div className='text-center mt-8'>
                    <button className='px-3.5 py-3 lg:px-28 lg:py-6 bg-primary text-white font-oxa text-xl rounded-2xl '><ImPhone className='inline-block text-3xl mr-3' /> Call us to delivery  123-456789</button>
                </div>
            </Container>
        </div>
    )
}

export default Location