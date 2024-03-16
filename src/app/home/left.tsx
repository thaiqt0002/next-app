import { FaFacebook, FaTwitter, FaGithub,  } from "react-icons/fa6";
import { TbUserQuestion } from "react-icons/tb";
import { IoLockOpenOutline } from "react-icons/io5";
import Link from 'next/link'
import { CateList } from './list'
export default function HomeLeft() {
    return(
        <div className='gap-2 flex flex-col'>
            <div className="bg-white p-4 rounded-md">
                <h1>Log in</h1>
                <form>
                    <div className="form-field p-2 flex h-14">
                        <div className='flex items-center h-full'>
                            <TbUserQuestion className='h-full w-auto p-1' /></div>
                        <input type = 'text' placeholder='Username' className='border h-full p-2 rounded-md w-full' data-toggle="tooltip" title="Hooray!"/>
                    </div>
                    <div className="p-2 flex h-14">
                        <div className='flex items-center'><IoLockOpenOutline className='h-full w-auto p-1' /></div>
                        <input type = 'password' placeholder = 'Password' className='border h-full p-2 rounded-md w-full'/>

                    </div>
                    <div className="p-2 h-12 flex justify-between items-center">
                        <button type='submit' className='p-2 bg-blue-600 '>Login</button>
                        <Link href='/login' className='text-blue-600 text-[0.85rem] hover:text-red-500 hover:underline'>Forgot the password?</Link>
                    </div>
                </form>
            </div>
            <div className = 'bg-white p-4 rounded-md '>
                <h1 className='mb-2'>Categories</h1>
                <CateList catelogo={FaFacebook} name='Facebook'/>
                <CateList catelogo={FaFacebook} name='Facebook'/>
                <CateList catelogo={FaTwitter} name='Twitter'/>
                <CateList catelogo={FaTwitter} name='Twitter'/>
                <CateList catelogo={FaGithub} name='Github'/>
                <CateList catelogo={FaGithub} name='Github'/>
                <CateList catelogo={FaGithub} name='Github'/>
                <CateList catelogo={FaGithub} name='Github'/>
                <CateList catelogo={FaTwitter} name='Twitter'/>
                <CateList catelogo={FaTwitter} name='Twitter'/>
                <CateList catelogo={FaFacebook} name='Facebook'/>
                <CateList catelogo={FaFacebook} name='Facebook'/>
            </div>
        </div>
    )
}