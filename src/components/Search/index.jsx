import React from 'react'
import "../Search/style.css"

 const Search = () => {
  return (
    <div>
        <div className='searchBox w-[100%] h-[40px] bg-[#e5e5e5] rounded-[10px] relative px-2'>
          <input type='text' placeholder='Search for products..' className='w-full h-[35px] focus:outline-none p-2 text-[15px]' />
            
        </div>
    </div>
  )
}

export default Search
