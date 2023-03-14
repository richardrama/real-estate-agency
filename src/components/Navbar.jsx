import React from 'react'
import { Logo } from '../assets'
import styles from '../style'

const Navbar = () => {
    return (
        <div className={`pt-5 font-poppins ${styles.boxWidth}`}>
            <div className='flex justify-between items-center'>
                <img src={Logo} alt="" className={`w-[100px] sm:w-[120px]`} />
                <ul className='flex'>
                    <li className='hover-gan hidden sm:block ml-[50px] text-white font-[500] text-[18px]'>Home</li>
                    <li className='hover-gan hidden sm:block ml-[50px] text-white font-[500] text-[18px]'>Explore</li>
                    <li className='hover-gan hidden sm:block ml-[50px] text-white font-[500] text-[18px]'>About Us</li>
                    <li className='hover-gan hidden sm:block ml-[50px] text-white font-[500] text-[18px]'>Help</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar