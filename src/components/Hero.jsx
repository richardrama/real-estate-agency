import React from 'react'
import Navbar from './Navbar'
import styles from '../style'

const Hero = () => {
    return (
        <div className={`Hero h-[100vh] w-full flex flex-col items-center text-white font-poppins`}>
            <Navbar />
            <div className="mt-[70px] flex flex-col items-center text-center">
                <h1 className='sm:max-w-[1000px] text-[90px] font-[700] leading-[120px]'>Your Luxurious home is waiting for you</h1>
                <p className='mt-[50px] sm:max-w-[650px] text-[30px]'>We have more than 8.000 luxurious properties around the world to show you</p>
                <button className='Button mt-[30px] text-[20px] border-solid border-2 border-white py-[8px] px-[20px] rounded-[5px]'><a href="#">Explore More</a></button>
            </div>

        </div>
    )
}

export default Hero