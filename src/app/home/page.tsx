import Left from '@/home/left' 
import Right from '@/home/right'

export default function Home() {
    return(
        <div className="flex gap-2 p-4 justify-between">
            <div className="w-[20%] rounded-md">
                <Left/>
            </div>
            <div className='w-[80%] rounded-md'>
                <Right/>
            </div>
        </div>
    )
}