import React from 'react'
import { Logo } from '../assets'
import styles from '../style'

const Footer = () => {
    return (
        <div className={`font-poppins flex flex-col items-center Footer`}>
            <div className={`py-[50px] flex justify-between items-center ${styles.boxWidth}`}>
                <div className="flex flex-col max-w-[300px]">
                    <div className="my-[10px] w-[120px] bg-black rounded-[50%]"><img src={Logo} alt="" className='' /></div>
                    <h1 className='mt-[10px] font-[600] text-[25px]'>Richard RealEstates</h1>
                    <p className=' text-[14px]'>Find a luxury residence that suits your liking, and we'll make sure you found one</p>
                </div>
                <div className="mt-[50px]">
                    <h1 className='font-[600] text-[25px]'>For Private Individuals</h1>
                    <ul className='mt-[20px] text-[18px]'>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Value a property</a> </li>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Sell your property</a> </li>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Search for real-estate agencies</a> </li>
                    </ul>
                </div>
                <div className="mt-[50px]">
                    <h1 className='font-[600] text-[25px]'>Information</h1>
                    <ul className='mt-[20px] text-[18px]'>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>About Us</a> </li>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Luxury Houses Blogs</a> </li>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Contact Us</a> </li>
                    </ul>
                </div>
                <div className="mt-[50px]">
                    <h1 className='font-[600] text-[25px]'>Settings</h1>
                    <ul className='mt-[20px] text-[18px]'>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Languages</a> </li>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Currency</a> </li>
                        <li className='mt-[13px]'><a href="" className='text-[16px] text-gray hover:text-black'>Download</a> </li>
                    </ul>
                </div>
            </div>
            <div className={`Copyrights flex justify-center border-gray border-black border-t-[2px] py-[20px] w-full ${styles.boxWidth}`}>
                <h1>© 2023 Richard RealEstates by <a href="https://www.github.com/richardrama" target={'_blank'} className='font-[600]'>Richard Rama Arung Bua'.</a> All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer