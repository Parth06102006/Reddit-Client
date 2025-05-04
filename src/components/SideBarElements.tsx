import { useContext } from 'react';
import { SearchContext } from '../context/redditSearch';

type Props = {
    title:string,
    delete:(t:object)=>void
}

const SideBarElements = (props: Props) => {
    const  {search,setSearch} = useContext(SearchContext)
  return (
    <div className='flex justify-between bg-slate-200/70 m-1 p-3 rounded hover:bg-white transition-all'>
        <p className='font-bold text-[18px] text-gray-500 hover:text-black cursor-pointer' onClick={()=>{setSearch(props.title)}}>/r/{props.title}</p>
        <div className='flex mr-3 gap-2 text-zinc-400 justify-center items-center'>
            <div onClick={()=>{setSearch(props.title)}}><i className="fa-solid fa-arrows-rotate hover:text-black cursor-pointer"></i></div>
            <div onClick={props.delete}><i className="fa-solid fa-trash hover:text-black cursor-pointer"></i></div>
        </div>    
    </div>
  )
}

export default SideBarElements