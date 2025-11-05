import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import footerLogo from '../../assets/logo.png'
import List from '../List'
import Listitem from '../Listitem'

const Footer = () => {
  return (
    <div>
        <div className='bg-secondary'>
            <Container className='py-11 lg:py-[84px]'>
                <div className='lg:flex justify-between'>
                    <div>
                        <h2 className='font-rale text-[40px] font-extrabold text-white mb-[22px] mx-4 lg:mb-0'>Get an update every week</h2>
                        <p className='font-rale taxt-base text-[#C5C5D2] lg:w-[501px]  mb-[22px] mx-4  lg:mb-0'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                    </div>
                    <div>
                        <h3 className='font-oxa text-primary text-[18px] font-bold  mb-[14px] lg:mb-0'>SUBSCRIBE TO NEWSLETTER</h3>
                        <div className='lg:flex gap-x-4'>
                            <input className='lg:inline-block block py-4 pl-[18px] pr-[150px] lg:pr-[177px] bg-secondary rounded-md border-2 border-[#C5C5D2] outline-[#C5C5D2] mb-[15px]' type="text" placeholder='Enter your mail'/>
                            <button className='lg:inline-block block py-3 px-5 bg-primary text-white font-bold font-oxa text-xl mr-5 rounded-2xl '>Subscribe</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <div className='bg-[#2F2E41]'>
            <Container className='pt-12 pb-14'>
                <div className='lg:flex'>
                    <div className='lg:mr-[482px] mx-auto lg:w-1/12'>
                        <img src={footerLogo} alt="footerLogo" className='mb-[22px]' />
                        <p className='font-rale text-base font-semibold text-[#9291A1] lg:w-[190px]  mb-[22px]'>The most trusted Courier company in your area.</p>
                    </div>
                    <div>
                        <Flex className='gap-x-6 lg:gap-x-32'>
                            <List>
                                <Listitem className='text-white font-oxa text-xl font-bold mb-[22px]' itemName='Other links'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1]' itemName='Blogs'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1] my-2' itemName='Movers website'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1]' itemName='Traffic Update'/>
                            </List>
                            <List>
                                <Listitem className='text-white font-oxa text-xl font-bold mb-[22px]' itemName='Services'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1]' itemName='Corporate goods'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1] my-2' itemName='Artworks'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1]' itemName='Documents'/>
                            </List>
                            <List>
                                <Listitem className='text-white font-oxa text-xl font-bold mb-[22px]' itemName='Customer Care'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1]' itemName='About Us'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1] my-2' itemName='Contact US'/>
                                <Listitem className='font-rale text-base font-semibold text-[#9291A1]' itemName='Get Update'/>
                            </List>
                        </Flex>
                    </div>
                </div>
            </Container>
        </div>
        <div className='bg-secondary'>
            <Container className='py-[30px]'>
                <Flex className='justify-between'>
                <p className='font-rale text-sm text-[#DBDBE9] font-medium	'>All rights Reserved © Your Company, 2021</p>
                <p className='font-rale text-sm text-[#DBDBE9] font-medium	'>Made with heart by <span className='text-primary font-extrabold'>ThemeWagon</span></p>
                </Flex>
            </Container>
        </div>
    </div>
  )
}

export default Footer