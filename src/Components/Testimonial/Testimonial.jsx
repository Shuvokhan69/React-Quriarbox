import React from 'react'
import Container from '../Container'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import Title from '../Title'
import Flex from '../Flex'
import testimonialImg from '../../assets/sidra.png'
import testimonial from '../../assets/imrose.png'


const Testimonial = () => {
    return (
        <div className='bg-[#bff0fe]'>
            <Container className='pt-7 pb-24'>
                <Flex className='justify-center'>
                    <BiSolidQuoteLeft className='text-[133px] text-[#FFD88D]' />
                    <Title sectionName='TESTIMONIAL' titleName='Our Awesome Clients' />
                </Flex>
                <div className='pt-10 pl-10 pr-7 pb-9 bg-white lg:w-[500px] mx-5 rounded-2xl shadow'>
                    <h4 className='font-bold text-primary font-rale text-2xl'>Fantastic service!</h4>
                    <p className='font-rale text-base text-[#464558] mt-3 '>I am satisfied with the fast courier service. Getting regular pick-ups, deliveries and payments. Doing business with them without any hassle..</p>
                    <div className='lg:flex lg:justify-between'>
                        <div className='flex text-primary text-xl mt-7 gap-x-1'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className='flex mt-6 gap-x-3 mx-auto lg:w-1/6 '>
                            <div>
                                <h5 className='lg:flex lg:justify-end font-bold text-base font-rale text-secondary'>Sidra</h5>
                                <p className='font-rale text-base text-[#464558] '>Sidra Tex</p>
                            </div>
                            <img className='rounded-full' m src={testimonialImg} alt="testimonialImg" />
                        </div>
                    </div>
                </div>
                <div className='pt-10 pl-10 pr-7 pb-9 bg-white lg:w-[500px] ml-96 rounded-2xl shadow'>
                    <h4 className='font-bold text-primary font-rale text-2xl'>Best</h4>
                    <p className='font-rale text-base text-[#464558] mt-3 '>Fast Courier Service in Bangladesh exceeded my expectations with their lightning-speed deliveries!.</p>
                    <div className='lg:flex lg:justify-between'>
                        <div className='flex text-primary text-xl mt-7 gap-x-1'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className='flex mt-6 lg:w-1/6 mx-auto gap-x-3'>
                            <div>
                                <h5 className='lg:flex lg:justify-end font-bold text-base font-rale text-secondary'>Imrose</h5>
                                <p className='font-rale text-base text-[#464558] '>Imrose Collection</p>
                            </div>
                            <img className='rounded-full' src={testimonial} alt="testimonial" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonial