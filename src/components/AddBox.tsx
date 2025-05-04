import  { useState } from 'react'
import { SearchContext } from '../context/redditSearch'
import { useContext } from 'react'
import { Input } from './Input'
import { Button } from './Button'

type Props = {
    onClick?:()=>void
    change?:()=>void
}

const AddBox = (props: Props) => {
    const [subreddit,setsubreddit] = useState('');
    const searchContext = useContext(SearchContext);
    if(!searchContext)
    {
        throw new Error('No context exisits');
    }
    const {setSearch} = searchContext;

  return (
    <div className='bg-transparent fixed z-10 rounded-2xl'>
        <div className='flex flex-col bg-zinc-300 px-5 py-10 rounded-2xl gap-1 border-3 border-orange-500 transition-[border] hover:border-white '>
            <div className='top-0 right-0 absolute m-2' onClick={props.onClick}><i className="fa-solid fa-circle-xmark"></i></div>
            <div className='flex flex-col text-center gap-2'>
                <Input variant='secondary' placeholder='Enter a SubReddit' size='sm' onChange={(e)=>{setsubreddit(e.target.value)}}/>
                    <Button variant='primary' size='sm' text="Add" onClick={()=>{setSearch(subreddit)}} change={props.change}/>
            </div>
        </div>
    </div>
  )
}

export default AddBox