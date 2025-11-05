import React from 'react'
import Title from '../Title'
import Container from '../Container'
import {BsDot} from 'react-icons/bs'
import serviceIconOne from '../../assets/serviceIconOne.png'
import serviceIconTwo from '../../assets/serviceIconTwo.png'
import serviceIconThree from '../../assets/serviceIconThree.png'

const Service = () => {
  return (
    <div className='bg-[#bff0fe]'>
        <Container className='py-[70px] lg:py-[170px]'>
            <Title sectionName='SERVICES' titleName='Our services for you'/>
            <div className='lg:flex gap-x-6'>
                <div className='mb-6 lg:mb-0 pt-[67px] px-[60px] ml-3 pb-[50px] bg-white shadow shadow-[rgba(63, 61, 86, 0.05)] rounded-2xl '>
                    <img className='mx-auto'  src={serviceIconOne} alt="serviceIcon1" />
                    <h3 className='text-center font-rale font-extrabold text-[#464558] text-2xl mt-7 mb-8'>Business Services</h3>
                    <p className='w-[301px] text-[#7B7A8B] text-base font-rale mb-2.5'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                    <div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Corporate goods</p>
                        </div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Shipment</p>
                        </div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Accesories</p>
                        </div>
                    </div>
                        <button className='py-3 px-24 text-primary  border-2 border-primary mt-[60px] font-oxa text-xl font-bold hover:bg-primary hover:text-white duration-300 rounded-2xl'>Learn more</button>
                </div>
                <div className='mb-6 lg:mb-0 pt-[67px] px-[60px] pb-[50px] bg-white shadow sadow-[rgba(63, 61, 86, 0.05)] rounded-2xl '>
                    <img className='mx-auto'  src={serviceIconTwo} alt="serviceIcon2" />
                    <h3 className='text-center font-rale font-extrabold text-[#464558] text-2xl mt-7 mb-8'>Statewide Services</h3>
                    <p className='w-[301px] text-[#7B7A8B] text-base font-rale mb-2.5'>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                    <div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Personal items</p>
                        </div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Percels</p>
                        </div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Documents</p>
                        </div>
                    </div>
                        <button className='py-3 px-24 text-primary border-2 border-primary mt-[60px] font-oxa text-xl font-bold hover:bg-primary hover:text-white duration-300 rounded-2xl'>Learn more</button>
                </div>
                <div className='pt-[67px] px-[60px]  mx-auto pb-[50px] bg-white shadow sadow-[rgba(63, 61, 86, 0.05)] rounded-2xl '>
                    <img className='mx-auto'  src={serviceIconThree} alt="serviceIcon3" />
                    <h3 className='text-center font-rale font-extrabold text-[#464558] text-2xl mt-7 mb-8'>Personal Services</h3>
                    <p className='w-[301px] text-[#7B7A8B] text-base font-rale mb-2.5'>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
                    <div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Gifts</p>
                        </div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Package</p>
                        </div>
                        <div className='flex items-center'>
                            <BsDot className='text-primary text-[25px]'/>
                            <p className=' text-[#7B7A8B] text-base font-rale'>Documents</p>
                        </div>
                    </div>
                        <button className='py-3 px-24 text-primary border-2 border-primary mt-[60px] font-oxa text-xl font-bold hover:bg-primary hover:text-white duration-300 rounded-2xl'>Learn more</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Service