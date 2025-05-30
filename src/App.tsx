"use client";
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/index'
import { ShootingStars } from "./components/ShootingStars";
import { StarsBackground } from "./components/Background";
import Dashboard from './components/Dashboard';
import { SearchContextProvider } from './context/redditSearch';
import { AddContextProvider } from './context/addComponent';

function App() {
  return (
    <div className=" bg-neutral-900 flex flex-col items-center justify-center relative w-full h-screen min-w-1/2">
      <div className='absolute inset-0'>
        <ShootingStars />
        <StarsBackground />
      </div>
        <div className='flex h-screen w-full justify-center items-center relative z-10'>
        <SearchContextProvider>
        <AddContextProvider>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/*' element={<div className='text-white text-4xl'>Page does not exist</div>}/>
            </Routes>
        </BrowserRouter>
        </AddContextProvider>
        </SearchContextProvider>
        </div>
    </div>
  );
}

export default App