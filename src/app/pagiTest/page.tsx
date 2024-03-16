'use client'
import {useRouter, useSearchParams} from 'next/navigation'
const data = [
  'entry 1',
  'entry 2',
  'entry 3',
  'entry 4',
  'entry 5',
  'entry 6',
  'entry 7',
  'entry 8',
  'entry 9',
  'entry 10']

export function PaginationControls ({nextPage,prevPage} : {
    nextPage: boolean,
    prevPage: boolean,    
}) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? 1
    const per_page = searchParams.get('per_page') ?? 5
    
    return (
        <div className="flex gap-2">
            <button 
            disabled={!prevPage}
            onClick = {() => {
                router.push(`/pagiTest?page=${Number(page)-1}&per_page=${Number(per_page)}`)
            }}>Prev</button>
        <div>
            {page} / {Math.ceil(10 / Number(per_page))}
        </div>
            <button
            disabled={!nextPage}
            onClick = {() => {
                router.push(`/pagiTest?page=${Number(page)+1}&per_page=${Number(per_page)}`)
            }}>Next</button>
        </div>
    )
}
export default function Home({
  searchParams
} : {
  searchParams: { [key: string] : string | string[] | undefined}
}) {
  const page = searchParams['pages'] ?? '1'
  const per_page = searchParams['per-page'] ?? '5'

  const start = (Number(page) - 1)* Number(per_page)
  const end = start + Number(per_page)

  const entries = data.slice(start, end)
  console.log(data.length)
  return (
    <div className="flex flex-col gap-2 items-center">
      {entries.map((entry) => (
        <p key={entry}>{entry}</p>
      ))}
      <PaginationControls
        prevPage = {start >=1}
        nextPage = {end < data.length}  
      />
    </div>
  )
}