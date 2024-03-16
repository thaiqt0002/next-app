import Link from 'next/link'
import React from 'react'

type Props = {
    func: React.MouseEventHandler<HTMLDivElement>
}

export default function Login({func} : Props) {
    return(
    <div className="">
      <h2>Log in</h2>
      <div className="form-field pt-4 flex h-14">
        <form className='flex flex-col gap-2 w-full'>
          <div className='flex h-fit flex-col w-full'>
            <label className='text-[0.9rem] pb-1 font-[500]'>USERNAME</label>
            <input type = 'text' placeholder='Username' className='border h-[3rem] p-2 rounded-md w-full focus:border-[#a2a2a2]' data-toggle="tooltip" title="Hooray!"/>
          </div>
          <div className="flex h-fit flex-col">
            <label className='text-[0.9rem] pb-1 font-[500]'>PASSWORD</label>
            <input type = 'password' placeholder = 'Password' className='border h-[3rem] p-2 rounded-md w-full focus:border-[#a2a2a2]'/>
          </div>
          <div className="mt-2 mb-2 h-12">
            <button type='submit' className='bg-blue-600 w-full'>Log in</button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-1">
            <input type='checkbox' className='checked:bg-red-500'/>
            <label className='text-[0.85rem]'>Remember me</label>
            </div>
            <div className="flex items-center">
                <Link href='/' className='text-blue-600 text-[0.85rem] hover:text-red-500 hover:underline'>Forgot the password?</Link>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className='text-blue-600  hover:text-red-500 hover:underline font-bold' onClick={func}>I don't have account? </div>
          </div>
        </form>
      </div>
    </div>
    )
}