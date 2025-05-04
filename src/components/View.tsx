import  { useEffect, useState } from 'react'
import { SearchContext } from '../context/redditSearch'
import { useContext } from 'react'
import axios from 'axios'
import Card from './Card'
import { AddContext } from '../context/addComponent'
import Error from './Error'


type Props = {}

const View = (props: Props) => {
    const {search} = useContext(SearchContext);
    const [reddits,setReddits] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    let {items,setItems} = useContext(AddContext);
    console.log('Search',search)

    useEffect(()=>{
      setLoading(true)
        const getReddit = async()=>
        {
            const storedItems = JSON.parse(localStorage.getItem('items')) || [];
            try {
              const response = await axios.get(`https://www.reddit.com/r/${search}.json`);
              console.log('res',response.data);
              setReddits(response.data.data.children)
              setLoading(false);
              if(!storedItems.find(t=> t===search))
              {
                const updatedList = [...storedItems,`${search}`]
                setItems(updatedList)
                console.log('Item',items)
              }
              setError(false)
            } catch (error) {
              setReddits([])
              setError(true)
            }
        }
        getReddit()
        return(()=>{
          localStorage.setItem('items',JSON.stringify(items))
          setLoading(false)})
    },[search])
    console.log(reddits)



  return (
    <>
      {}
      {!loading ? <div className='flex flex-col items-center'>
      <div className='lg:mr-[550px] underline text-white animate-pulse'><h2 className='text-white font-bold text-3xl lg:text-center mb-5'>/r/{search}</h2></div>
      <div className=' w-fit top-0 inset-0 bg-zinc-600/20 overflow-y-scroll ml-[350px] py-7px-10 rounded-2xl h-[550px] p-3'>
            <div className='flex flex-wrap overflow-hidden gap-10'>
              {reddits.map((t)=>(<Card link={t.data.thumbnail} ups={t.data.ups} key={t} redditLink={t.data.url} title={t.data.title}/>))}
            </div>
        </div>
  </div>:
  <div className='flex justify-center items-center'>
    <div className='w-[120px] h-[120px] rounded-full border-[16px] bg-linear-to-bl from-red-600 to-orange-300 animate-spin'>
    <div className='absolute bg-white w-[50px] h-[50px] rounded-full'></div>
    </div>
    <div className='mt-50 p-2 fixed'>      
      {error ? <Error/> :     
      <div className='text-white text-4xl text-center animate-pulse font-extrabold'>
        Add a SubReddit
      </div>}
    </div>
    </div>}
    </>
  )
}

export default View