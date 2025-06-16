import Search from '@/component/Search'
import Link from 'next/link'
import React from 'react'

function Apartment() {
  return (

    <div>
        <Search/>
        <p className='text-2xl mx-4 my-3'>Select you want to visit</p>
        <ul className='mx-4 my-3'>
            <li className='p-2 rounded-xl bg-gray-100 text-black my-2 flex justify-between'>
                <Link href="apartment/subdevision/ao1">Tower A "please click here"</Link>
                <p className='font-bold'>{'>'}</p>
            </li>
            <li className='p-2 rounded-xl bg-gray-100 text-black my-2 flex justify-between'>
                <Link href="apartment/subdevision/ao2">Tower B</Link>
                <p className='font-bold'>{'>'}</p>
            </li>
            <li className='p-2 rounded-xl bg-gray-100 text-black my-2 flex justify-between'>
                <Link href="apartment/subdevision/ao3">Tower C</Link>
                <p className='font-bold'>{'>'}</p>
            </li>
            <li className='p-2 rounded-xl bg-gray-100 text-black my-2 flex justify-between'>
                 <Link href="apartment/subdevision/ao4">Tower D</Link>
                <p className='font-bold'>{'>'}</p>
            </li>
        </ul>
    </div>
  )
}

export default Apartment