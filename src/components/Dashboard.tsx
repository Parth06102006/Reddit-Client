import React, { useEffect, useState } from 'react'
import { SearchContext } from '../context/redditSearch'
import { useContext } from 'react'
import axios from 'axios'
import SideBar from './SideBar'
import AddBox from './AddBox'
import { Button } from './Button'
import {Add} from '../elements/Add'
import Card from './Card'
import View from './View'
type Props = {}

const Dashboard = (props: Props) => {
    const [searchBox,setSearchBox] = useState(false)
    
  return (
    <>
        <SideBar/>
        <div className='text-white top-0 right-0 absolute m-5'>
            <Button onClick={()=>{setSearchBox(!searchBox)}} variant='primary' size='sm' startIcon={<Add size='lg'/>}></Button>
        </div>
        {searchBox && <AddBox onClick={()=>{setSearchBox(!searchBox)}} change={()=>{setSearchBox(!searchBox)}} />}
        <View/>
    </>
  )
}

export default Dashboard