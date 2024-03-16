import { IntegerType } from 'mongodb'
import Image from 'next/image'
import React from 'react'
import { IconType } from 'react-icons'

export function BannerList({imgsrc}: {imgsrc: string}) {
    return (
        <div className ='h-[20em] w-fit rounded-md snap-center shrink-0 relative'>
            <Image width='1000' height='1000' src={imgsrc} alt='banner' className = 'rounded-md h-full w-auto'/>
        </div>
    )
}

export function ShortcutList({sclogo: Sclogo}: {sclogo: IconType}) {
    return (
        <div className="hover:bg-slate-100">
          <div className="flex items-center justify-center h-2/3">
            <div className="border-2 p-4 rounded-xl">
                <Sclogo/>
            </div>
          </div>
          <div className="text-center">text</div>
        </div>
    )
}

export function CateList({catelogo: Catelogo, name} : {catelogo : IconType, name: string}) {
    return (
        <div className='flex items-center mt-1 rounded-md hover:bg-gray-200 pt-2 pb-2'>
            <Catelogo className='w-10 h-10 mr-3' />
            <p>{name}</p>
        </div>
    )
}
export function ContentFilterList ({name} : {name: string}) {
    return (
        <div className="bg-transparent flex items-center justify-center text-blue-500 font-[600] hover:border-b-2 hover:border-cyan-400 w-[8rem]">{name}</div>
    )
}

let tempArray: number[] = [];
for (let i = 0; i < 100; i++) {
    tempArray[i] = i;
}
const Array = tempArray;

export function ContentList() {
    return (
        Array.map(item => (CheckContentList({item})))
    )
}
function CheckContentList({item} : {item: number}) {
    return (
        <div className="">
            <div className="bg-white rounded-md h-[23rem]">
                <img src='/pic.png' alt='banner' className='w-full'/>
                <div className="">
                    <label>{item}</label>
                </div>
            </div>
        </div>
    )
}