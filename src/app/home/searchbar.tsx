'use client'
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useRef } from 'react';

export default function Search() {
    const cateOptionRef = useRef<HTMLDivElement | null>(null);
    const angleRRef = useRef<HTMLDivElement | null>(null)
    const angleDRef = useRef<HTMLDivElement | null>(null)
    const [isShown, setIsShown] = useState(false); 
    const cateOn = () => {
        cateOptionRef.current?.classList.add('hidden');
        angleRRef.current?.classList.remove('hidden');
        angleDRef.current?.classList.add('hidden');
        
        setIsShown(false)
    }
    const cateOff = () => {
        cateOptionRef.current?.classList.remove('hidden');
        angleRRef.current?.classList.add('hidden');
        angleDRef.current?.classList.remove('hidden')
        setIsShown(true)
    }
    const cateOption = () => {
        if(isShown) { 
            cateOn()
        } else {
            cateOff()
        } 
        
    }
    
    return (
        <div>
            <div className='flex text-black'>
                <div onMouseLeave={() => cateOn()}>
                <div className="flex">
                    <button className='flex justify-center items-center gap-1 w-[5em] h-full rounded-r-none pb-[0.6rem]' onMouseEnter={() => cateOption()}  onClick={() => cateOption()}>
                        <p>All</p>
                        <div ref={angleDRef} className="hidden pt-[0.2rem]">
                            <FaAngleDown />
                        </div>
                        <div ref={angleRRef}>
                        <FaAngleRight  />
                        </div>
                        
                    </button>
                </div>
                <div ref={cateOptionRef} className="absolute z-10 hidden">
                    <ul className='flex flex-col justify-center p-2 w-[10em] bg-black text-white mt-1 rounded-md'>
                        <li className='p-[0.375rem] hover:bg-gray-600 '>Facebook</li>
                        <li className='p-[0.375rem] hover:bg-gray-600'>Github</li>
                        <li className='p-[0.375rem] hover:bg-gray-600'>Zalo</li>
                        <li className='p-[0.375rem] hover:bg-gray-600'>Twitter</li>
                    </ul>
                </div>
                </div>
                <div className="flex border-[1px] h-full pl-1">
                    <input placeholder='Search items....' type='search' className=' pt-2 pb-2 pl-1 outline-none w-[10em]'/>
                </div>
                <button type='submit' className='bg-blue-600 rounded-l-none'>Enter</button>
            </div>
        </div>
    )
}