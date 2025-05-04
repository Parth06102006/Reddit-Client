import  { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Search } from '../elements/Search'
import image from '../utils/images/image.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../context/redditSearch';

export const Home = () => {
  const {setSearch} = useContext(SearchContext)
  const [subreddit,setsubreddit] = useState('')
  const navigate = useNavigate();
  return (
    <div>
        <div className='flex flex-col gap-1 items-center justify-center'>
            <img src={image} width={'300px'} alt='image' className='bg-linear-to-t from-red-400 to-orange-700 rounded-full shadow-[0px_15px_100px_rgba(237,130,7,0.6)]'/>
            <h1 className='text-8xl mt-5 mb-4 font-extrabold text-zinc-200'>Redifi</h1>
            <div className='flex bg-zinc-300 px-5 py-10 rounded-2xl gap-1 border-3 border-orange-500 transition-[border] hover:border-white'>
              <Input variant='secondary' placeholder='Enter a SubReddit' size='sm' onChange={(e)=>{setsubreddit(e.target.value)}} value={subreddit}/>
              <div className='w-fit'>
                <Button variant='primary' size='sm' onClick={()=>{
                  setSearch(subreddit)
                  navigate('/dashboard')}} startIcon={<Search size='sm'/>}/>
              </div>
            </div>
        </div>
    </div>
  )
}
