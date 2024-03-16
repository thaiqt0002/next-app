import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
type Props = {
  func: React.MouseEventHandler<HTMLDivElement>
}

export default function Signup({func} : Props)  {
    return(
    <div className="">
      <h2>Sign up</h2>
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
          <div className="mt-2 mb-1 h-12">
            <button type='submit' className='bg-blue-600 w-full'>Sign up</button>
          </div>
          <div className="flex flex-col justify-center text-center">
            <label className='font-[300] text-[0.9rem] mb-1'>Or you can sign up with:</label>
            <div className="flex justify-center gap-2 h-14 ">
              <FaGoogle className='h-full w-auto p-2 hover:bg-slate-400 rounded-md'/>
              <FaSquareFacebook className='h-full w-auto p-2 hover:bg-slate-400 rounded-md'/>
              <FaGithub className='h-full w-auto p-2 hover:bg-slate-400 rounded-md'/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className='text-blue-600  hover:text-red-500 hover:underline font-bold' onClick={func}> I already have account </div>
          </div>
        </form>
      </div>
    </div>
    )
}