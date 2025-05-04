import React, { useState,useEffect, useCallback } from 'react'
import image from '../utils/images/image.png'
import SideBarElements from './SideBarElements'
import { useContext } from 'react'
import { AddContext } from '../context/addComponent'

type Props = {}

const SideBar = (props: Props) => {
    let {items,setItems} = useContext(AddContext);

    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem('items'));
        setItems(stored)
    },[])

    useEffect(()=>{
        localStorage.setItem('items',JSON.stringify(items))
    },[items])
    
    function handleDelete(itemDelete:string)
    {
        const filtered = items.filter(item => item !== itemDelete);
        setItems(filtered);
        localStorage.setItem('items',JSON.stringify(filtered))
    }

    return (
            <div className='bg-zinc-400/20 absolute top-0 left-0 h-screen border-r-2 border-red-400'>
                <div className='text-black w-[350px] '>
                    <div className='m-2 p-2 flex justify-around items-center'>
                        <img src={image} width={'50px'} alt='image' className='bg-linear-to-t from-red-400 to-orange-700 rounded-full shadow-[0px_15px_100px_rgba(237,130,7,0.6)]'/>
                        <h1 className='text-2xl mt-5 mb-4 font-extrabold text-zinc-200'>Redifi</h1>
                    </div>
                </div>
                {items.map(t=>(<SideBarElements title={`${t}`} delete={()=>{handleDelete(t)}}/>))}
            </div>
  )
}

export default SideBar