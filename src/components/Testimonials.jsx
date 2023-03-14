import React from 'react'
import { Profile1, Stars } from '../assets'
import styles from '../style'

const Testimonials = () => {
    return (
        <div className={`py-[50px] Service-1 flex flex-col items-center ${styles.boxWidth} mb-[50px]`}>
            <h1 className='max-w-[700px] text-center pb-[15px] text-[30px] sm:text-[35px] font-[700]'>What's our users say about our services</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                <li className='pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                    <div className="flex">
                        <img src={Profile1} alt="Profile-1" className='rounded-[50%] w-[50px] mr-[20px]' />
                        <div className="flex flex-col">
                            <p className='text-[20px] font-[600]'>John Doe</p>
                            <p className='text-[15px]'>Santa Monica, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src={Stars} alt="Review" className='mr-[10px] h-[20px]' />
                        <p className='font-[600] mt-[2px]'>5.0</p>
                    </div>
                    <p className='mt-[10px] text-[14px]'>
                        Very good app, I found the properties that I've been searching for. What a great agency this company is.
                        They handle everything like professionals. I would recommend them to others.
                    </p>
                </li>
                <li className='pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                    <div className="flex">
                        <img src={Profile1} alt="Profile-1" className='rounded-[50%] w-[50px] mr-[20px]' />
                        <div className="flex flex-col">
                            <p className='text-[20px] font-[600]'>John Doe</p>
                            <p className='text-[15px]'>Santa Monica, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src={Stars} alt="Review" className='mr-[10px] h-[20px]' />
                        <p className='font-[600] mt-[2px]'>5.0</p>
                    </div>
                    <p className='mt-[10px] text-[14px]'>
                        Very good app, I found the properties that I've been searching for. What a great agency this company is.
                        They handle everything like professionals. I would recommend them to others.
                    </p>
                </li>
                <li className='hidden sm:block pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                    <div className="flex">
                        <img src={Profile1} alt="Profile-1" className='rounded-[50%] w-[50px] mr-[20px]' />
                        <div className="flex flex-col">
                            <p className='text-[20px] font-[600]'>John Doe</p>
                            <p className='text-[15px]'>Santa Monica, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src={Stars} alt="Review" className='mr-[10px] h-[20px]' />
                        <p className='font-[600] mt-[2px]'>5.0</p>
                    </div>
                    <p className='mt-[10px] text-[14px]'>
                        Very good app, I found the properties that I've been searching for. What a great agency this company is.
                        They handle everything like professionals. I would recommend them to others.
                    </p>
                </li>
                <li className='hidden sm:block pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                    <div className="flex">
                        <img src={Profile1} alt="Profile-1" className='rounded-[50%] w-[50px] mr-[20px]' />
                        <div className="flex flex-col">
                            <p className='text-[20px] font-[600]'>John Doe</p>
                            <p className='text-[15px]'>Santa Monica, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src={Stars} alt="Review" className='mr-[10px] h-[20px]' />
                        <p className='font-[600] mt-[2px]'>5.0</p>
                    </div>
                    <p className='mt-[10px] text-[14px]'>
                        Very good app, I found the properties that I've been searching for. What a great agency this company is.
                        They handle everything like professionals. I would recommend them to others.
                    </p>
                </li>
                <li className='hidden sm:block pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                    <div className="flex">
                        <img src={Profile1} alt="Profile-1" className='rounded-[50%] w-[50px] mr-[20px]' />
                        <div className="flex flex-col">
                            <p className='text-[20px] font-[600]'>John Doe</p>
                            <p className='text-[15px]'>Santa Monica, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src={Stars} alt="Review" className='mr-[10px] h-[20px]' />
                        <p className='font-[600] mt-[2px]'>5.0</p>
                    </div>
                    <p className='mt-[10px] text-[14px]'>
                        Very good app, I found the properties that I've been searching for. What a great agency this company is.
                        They handle everything like professionals. I would recommend them to others.
                    </p>
                </li>
                <li className='pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                    <div className="flex">
                        <img src={Profile1} alt="Profile-1" className='rounded-[50%] w-[50px] mr-[20px]' />
                        <div className="flex flex-col">
                            <p className='text-[20px] font-[600]'>John Doe</p>
                            <p className='text-[15px]'>Santa Monica, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <img src={Stars} alt="Review" className='mr-[10px] h-[20px]' />
                        <p className='font-[600] mt-[2px]'>5.0</p>
                    </div>
                    <p className='mt-[10px] text-[14px]'>
                        Very good app, I found the properties that I've been searching for. What a great agency this company is.
                        They handle everything like professionals. I would recommend them to others.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Testimonials