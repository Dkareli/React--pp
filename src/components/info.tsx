import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'
import {useState} from 'react'


const Info  = () => {
    const {data,isLoading} = useQuery('data', () =>
        axios('https://fakestoreapi.com/products')
            .then(response => response.data))
    const [counter,setCounter]=useState<string|number>(57)
    const handleClick = (title:number) => {
        setCounter(title)
        console.log(counter)
    }
    if(isLoading)
    {
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <div className='bg-slate-700 w-full h-auto'>
            {data.map((item:any)=>(
                <div
                key={item.id}>
                    <p
                    onClick={() => handleClick(item.title)}>{item.id}</p>
                </div>
            ))}
        </div>
    )
}

export default Info