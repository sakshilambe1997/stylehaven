import  Button  from '@mui/material/Button'
import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";

 const Navigation = () => {
  return (
    <nav className='py-1'>
        <div className=' container flex items-center justify-end gap-8'>
            <div className='col_1 w-[25%]  '>
                <Button className='!text-black gap-2 w-full'><RiMenu2Fill className='text-[18px]'/>Shop By Categories
                <TfiAngleDown className='text-[14px] ml-auto font-bold'/>
                
                </Button>

            </div>

            <div className='col_2 w-[60%] '>
                <ul className='flex items-center gap-3'>
                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Home</Button>
                        
                        </Link>
                    </li>

                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Fashion</Button>
                        
                        </Link>
                    </li>


                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Electronics</Button>
                        </Link>
                    </li>


                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Bags</Button></Link>
                    </li>


                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Groceries</Button></Link>
                    </li>

                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Beauty</Button></Link>
                    </li>


                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Wellness</Button></Link>
                    </li>

                    <li className='list-none'>
                        <Link  to="/" className='link transition text-[14px] font-[500]'>
                        <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Jewellery</Button></Link>
                    </li>



                </ul>
            
            </div>

            <div className='col_3 w-[20%] '>
                <p className='text-[13px] font-[500] gap-1 flex items-center mb-0 mt-0'><GoRocket className='text-[17px]'/> Free Intermnational Delivery</p>

                </div>

        

        </div>
   
    </nav>
  )
}

export default Navigation