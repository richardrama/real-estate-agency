import React from 'react'
import { Checkmark, Image2, Image31, Image32, Image33, Service1, Service2, Service3 } from '../assets'
import styles from '../style'
import Testimonials from './Testimonials'

const Service = () => {
    return (
        <div className={`font-poppins Service flex flex-col items-center px-[20px] sm:px-[0px]`}>
            <div className={`py-[50px] Service-1 flex flex-col items-center ${styles.boxWidth}`}>
                <h1 className='pb-[15px] text-[30px] sm:text-[35px] font-[700]'>Our Service</h1>
                <p className='pb-[50px] text-[15px] text-center sm:text-[18px] font-[400]'>When it comes to real estate and properties, we're very happy step of the way</p>
                <div className="w-full ">
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                        <li className='flex flex-col items-center pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                            <img src={Service3} alt="" className='mt-[10px] w-[70px] sm:w-[60px]' />
                            <p className='text-center mt-[20px] mb-[10px] font-[700] text-[16px] sm:text-[18px]'>Property Insurance</p>
                            <p className='text-center text-[13px] sm:text-[16px]'>Property Insurance provides protection against most risks to property, such as fire, theft, etc.</p>
                        </li>
                        <li className='flex flex-col items-center pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                            <img src={Service1} alt="" className='mt-[10px] w-[70px] sm:w-[60px]' />
                            <p className='text-center mt-[20px] mb-[10px] font-[700] text-[16px] sm:text-[18px]'>Advantage</p>
                            <p className='text-center text-[13px] sm:text-[16px]'>All these properties have amazing prices, and you'll find thousands to choose from.</p>
                        </li>
                        <li className='flex flex-col items-center pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                            <img src={Service2} alt="" className='mt-[10px] w-[70px] sm:w-[60px]' />
                            <p className='text-center mt-[20px] mb-[10px] font-[700] text-[16px] sm:text-[18px]'>Low Comission</p>
                            <p className='text-center text-[13px] sm:text-[16px]'>We offer a competitive comisson structure that are straightforward and fair, making it simple and yet affordable.</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="">
                        <img src={Image2} alt="House-2" className='rounded-[10px] sm:rounded-[15px] Image-2' />
                    </div>
                    <div className="flex flex-col items-center sm:block">
                        <h1 className='text-[25px] leading-9 text-center sm:text-left sm:text-[35px] font-[700] sm:leading-11 mb-2'>We are the best and most trusted real estate agent</h1>
                        <p className='text-[15px] text-center sm:text-left sm:text-[19px] my-3 sm:my-5'>We are a really trusted real estate agent with more than a decade of experiences, so don't be worry and trust us.</p>
                        <ul>
                            <li className='flex text-[13px] sm:text-[17px] items-center mt-[20px]'><img src={Checkmark} alt="" className='mr-[10px] w-[16px] sm:w-[23px]' />Worked with 60K and more partners</li>
                            <li className='flex text-[13px] sm:text-[17px] items-center mt-[20px]'><img src={Checkmark} alt="" className='mr-[10px] w-[16px] sm:w-[23px]' />Professionals and experienced sources</li>
                            <li className='flex text-[13px] sm:text-[17px] items-center mt-[20px]'><img src={Checkmark} alt="" className='mr-[10px] w-[16px] sm:w-[23px]' />Providing the best service for our customers</li>
                        </ul>
                        <button className='blackButton rounded-[5px] bg-black text-white text-[14px] sm:text-[17px] py-[7px] sm:py-[10px] px-[26px] sm:px-[30px] mt-5'><a href="">Learn More</a></button>
                    </div>
                </div>
                <div className="flex flex-col justify-start mt-[100px] w-full">
                    <h1 className='text-[30px] sm:text-[35px] font-[700] leading-11 max-w-[600px]'>This is the most closest properties to your location</h1>
                    <div className='mt-[30px]'>
                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10'>
                            <li className='flex flex-col pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                                <div className="h-[200px] sm:h-[350px] mb-[10px] "><img src={Image31} alt="" className='h-full w-full object-cover' /></div>
                                <h1 className='text-[18px] sm:text-[20px] font-[600] '>Resident Complex</h1>
                                <p className='text-[12px] sm:text-[15px]'>Owners : Richard Rama Arung Bua'</p>
                                <div className="flex justify-between w-full items-center mt-1">
                                    <p className='text-[18px] sm:text-[20px] font-[600]'>$5.200.000</p>
                                    <button className='blackButton rounded-[5px] bg-black text-white text-[13px] sm:text-[16px] py-[7px] px-[20px] mt-2'><a href="">View Details</a></button>
                                </div>
                            </li>
                            <li className='flex flex-col pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                                <div className="h-[200px] sm:h-[350px] mb-[10px] "><img src={Image32} alt="" className='h-full w-full object-cover' /></div>
                                <h1 className='text-[18px] sm:text-[20px] font-[600] '>Mansion in the hills</h1>
                                <p className='text-[12px] sm:text-[15px]'>Owners : Richard Rama Arung Bua'</p>
                                <div className="flex justify-between w-full items-center mt-1">
                                    <p className='text-[18px] sm:text-[20px] font-[600]'>$12.600.000</p>
                                    <button className='blackButton rounded-[5px] bg-black text-white text-[13px] sm:text-[16px] py-[7px] px-[20px] mt-2'><a href="">View Details</a></button>
                                </div>
                            </li>
                            <li className='flex flex-col pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                                <div className="h-[200px] sm:h-[350px] mb-[10px] "><img src={Image33} alt="" className='h-full w-full object-cover' /></div>
                                <h1 className='text-[18px] sm:text-[20px] font-[600] '>Townhouse</h1>
                                <p className='text-[12px] sm:text-[15px]'>Owners : Richard Rama Arung Bua'</p>
                                <div className="flex justify-between w-full items-center mt-1">
                                    <p className='text-[18px] sm:text-[20px] font-[600]'>$7.500.000</p>
                                    <button className='blackButton rounded-[5px] bg-black text-white text-[13px] sm:text-[16px] py-[7px] px-[20px] mt-2'><a href="">View Details</a></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <Testimonials />
        </div>
    )
}

export default Service