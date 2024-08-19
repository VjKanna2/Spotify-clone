import React from 'react'
import Nav from './Nav'
import { assets } from '../assets/assets'

const Search = () => {
    return (
        <div className='px-6 pt-4 bg-[#121212] h-[100%]'>
            <Nav />
            <div className='relative w-[75%] sm:w-[40%] [@media(max-width:385px)]:w-[100%]  mt-6'>
                <img className='absolute w-5 h-5 left-3 top-1/2 transform -translate-y-1/2 z-10' src={assets.search_icon} />
                <input type="text" className='w-full pl-10 p-3 rounded-full bg-[#242424] border-none text-white placeholder-[#757575]' placeholder='What do you want to play?'/>
            </div>
        </div>
    )
}

export default Search