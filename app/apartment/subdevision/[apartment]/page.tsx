import React from 'react'
import {data} from '@/data/static'


type DataKeys = keyof typeof data; //used copilot here

async function Apartment({params}:{params:Promise<{apartment:string}>}) {
    const residents = (await params).apartment;
    let data_to_display: string[] = [];
    for(const key in data){
        if(residents === key){
            data_to_display = data[key as DataKeys];
        }
    }
  return (

    <div>
        <div className='my-4'>Member List</div>
      {
        data_to_display.map((data) => {
            return (
                
                <div key={data} className='flex justify-between p-2 rounded-xl bg-gray-100 text-black my-2 py-4'>
                    <li className=' list-none text-bold'>{data}</li>
                    <p>call logo</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Apartment