import React from 'react'
import { Service1, Service2, Service3 } from '../assets'
import styles from '../style'

const Service = () => {
    return (
        <div className={`font-poppins Service flex flex-col items-center h-[100vh]`}>
            <div className={`py-[50px] Service-1 flex flex-col items-center ${styles.boxWidth}`}>
                <h1 className='pb-[15px] text-[35px] font-[700]'>Our Service</h1>
                <p className='pb-[50px] text-[18px] font-[400]'>When it comes to real estate and properties, we're very happy step of the way</p>
                <div className="w-full ">
                    <ul className='grid grid-cols-3 gap-10'>
                        <li className='flex flex-col items-center pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                            <img src={Service3} alt="" className='mt-[10px]  sm:w-[60px]' />
                            <p className='text-center mt-[20px] mb-[10px] font-[700] text-[18px]'>Property Insurance</p>
                            <p className='text-center '>Property Insurance provides protection against most risks to property, such as fire, theft, etc.</p>
                        </li>
                        <li className='flex flex-col items-center pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                            <img src={Service1} alt="" className='mt-[10px]  sm:w-[60px]' />
                            <p className='text-center mt-[20px] mb-[10px] font-[700] text-[18px]'>Advantage</p>
                            <p className='text-center '>All these properties have amazing prices, and you'll find thousands to choose from.</p>
                        </li>
                        <li className='flex flex-col items-center pt-[20px] pb-[25px] px-[20px] bg-white rounded-[15px] box-shadow'>
                            <img src={Service2} alt="" className='mt-[10px]  sm:w-[60px]' />
                            <p className='text-center mt-[20px] mb-[10px] font-[700] text-[18px]'>Low Comission</p>
                            <p className='text-center '>We offer a competitive comisson structure that are straightforward and fair, making it simple and yet affordable.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Service