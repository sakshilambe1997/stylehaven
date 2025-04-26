import React from 'react'
import "../Search/style.css"
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';

 const Search = () => {
  return (
    <div>
        <div className='searchBox w-[100%] h-[40px] bg-[#e5e5e5] rounded-[10px] relative px-2'>
          <input type='text' placeholder='Search for products..' className='w-full h-[35px] focus:outline-none p-2 text-[15px]' />
            
          <Button className='!absolute top-[2px] right-[5px] z-50 !w-[35px] !min-w-[35px] h-[35px] !rounded-full !text-black'><IoMdSearch className='text-[#0000008f] text-[50px]' /></Button>  
        </div>
    </div>
  )
}

export default Search
