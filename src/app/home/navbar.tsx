import '@/ui/navbar.css'
import Link from 'next/link'
import Search from '@/home/searchbar'
export default function Navbar()  {
    return (
        <div className = 'bg-white text-white flex justify-between p-2 top-0 z-50 sticky'>
        <Link href='/' className="text-black flex justify-center items-center">RANDOM LOGO</Link>
        <div className="w-[60%] md:flex justify-center hidden">
            <Search/>
        </div>
        <div> 
            <Link href='/login'><button className=''>Log in</button></Link>
        </div>
        </div>
    )
}