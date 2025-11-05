import React from 'react'
import Container from '../Container'
import counterImgOne from '../../assets/counterImgOne.png'
import counterImgTwo from '../../assets/counterImgTwo.png'
import counterImgThree from '../../assets/counterImgThree.png'
import counterImgFour from '../../assets/counterImgFour.png'
import counterImgFive from '../../assets/counterImgFive.png'


const Counter = () => {
  return (
    <div className='bg-[#bff0fe]'>
        <Container className='pb-16 lg:pb-40'>
            <div className='lg:flex gap-x-[151px]'>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgOne} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>50+</h2>
                    <p className='font-rale text-xl font-bold'>Awards  won</p>
                </div>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgTwo} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>50+</h2>
                    <p className='font-rale text-xl font-bold'>States covered</p>
                </div>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgThree} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>100K+</h2>
                    <p className='font-rale text-xl font-bold'>Happy clients</p>
                </div>
                <div className='text-center mb-6 lg:mb-0'>
                    <img className='mx-auto' src={counterImgFour} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>10M+</h2>
                    <p className='font-rale text-xl font-bold'>Goods delivered</p>
                </div>
                <div className='text-center'>
                    <img className='mx-auto' src={counterImgFive} alt="counter-img-1" />
                    <h2 className='font-rale font-extrabold text-[39px] text-primary'>30M+</h2>
                    <p className='font-rale text-xl font-bold'>Business hours</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Counter