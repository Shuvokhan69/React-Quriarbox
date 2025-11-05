import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'
import Listitem from '../Listitem'
import {IoIosSearch} from 'react-icons/io'
import {FaBars} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import logo from '../../assets/logo.png'


const Navbar = () => {
  const [show,setShow] = useState(false);
  const handleClick = () =>{
    setShow(!show)
  }
  return (
    <div className='bg-[#bff0fe]'>
        <Container className='py-8'>
            <Flex className='items-center'>
                <div className='lg:w-1/12'>
                  <img src={logo} alt="logo" />
                </div>
                <div onClick={handleClick} className='ml-auto'>
                  {
                    show == true ? <RxCross2 className='lg:hidden text-primary'/> : <FaBars className='lg:hidden text-primary'/>
                  }
                </div>
                <div className={`absolute lg:static bg-[#bff0fe] px-5 py-5 lg:px-0 lg:py-0 lg:bg-[#bff0fe] shadow rounded lg:shadow-none lg:w-4/5 lg:flex lg:justify-end items-center duration-300 text-center ${show ? 'top-[88px] left-0'  : 'top-[88px] -left-72'}`}>
                  <List className='lg:flex text-base font-bold font-rale text-[#817382] gap-x-6 '>
                      <Listitem className=' hover:text-primary duration-300' itemName='Home'/>
                      <Listitem className='mt-3 lg:mt-0 hover:text-primary duration-300' itemName='Our services'/>
                      <Listitem className='mt-3 lg:mt-0 hover:text-primary duration-300' itemName='About Us'/>
                      <Listitem className='mt-3 lg:mt-0 hover:text-primary duration-300' itemName='What’s new?'/>
                  </List>
                  <div>
                    <button className=' p-3.5 mt-3 lg:mt-0 lg:ml-11 bg-[#FFEDC9] rounded-md '><IoIosSearch className=' text-primary text-xl'/></button>
                  </div>
                  <div>
                    <button className=' px-5 py-3 mt-3 lg:mt-0 lg:ml-2.5 bg-[#FFE4D9]  rounded-md text-primary text-xl font-oxa'>Contact us</button></div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Navbar