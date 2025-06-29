import React from 'react'
import { Link} from 'react-router-dom'
import logo from "./../../assets/home-img/logo.jpg"
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

 const Header = () => {
  return (
    <div>
      <header className='bg-white'>
        <div className='top-strip py-2 border-t-[1px] border-gray-250 border-b-[10px]'>
          <div className='container'>
            <div className='flex items-center justify-between'>
              <div className='col1 w-[50%]'>
                <p className='text-[13px] font-[500]'> Get up to 50% off new season styles, limited time</p>
              </div>

              <div className='col2 flex items-center justify-end '>

                <ul className='flex items-center '>
                  <li className='list-none'>
                    <Link to="help-center" className='text-[13px] link font-[500]  mx-[4px] transition'> Help Center</Link>

                    <Link to="/order tracking" className='text-[13px] link font-[500] mx-[4px] transition'> Order Tracking</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className='headerpy-4   border-gray-300 border-b-[1px]  '>
          <div className='container flex items-center justify-between py-2'>
            <div className='col1 w-[20%] '>
              <Link to={"/"}>
              <img src={logo} alt='brand-logo' className='h-[60px] w-[80px] rounded-md'/>
              </Link>

            </div>

            <div className='col2 w-[45%]'>
              <Search/>

            </div>

            <div className='col3 w-[30%] flex items-center pl-7'>
              <ul className=' flex items-center justify-end gap-3  w-full'>
                <li className='list-none'>
                  <Link to="/login " className='link transition text-[15px] font-[500]'>Login</Link>  &nbsp;| 
                   <Link to="/register" className='link transition text-[15px] font-[500]'> Register</Link>         
                </li>
                <li>
                <Tooltip title="Compare">
                <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
      <IoMdGitCompare />
      </StyledBadge>
    </IconButton>
    </Tooltip>
                </li>

                <li>
                <Tooltip title="Whishlist">
                <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
      <MdOutlineShoppingCart />
      </StyledBadge>
    </IconButton>
    </Tooltip>
                </li>   


                <li>
                <Tooltip title="Cart">
                <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <FaRegHeart />
      </StyledBadge>
    </IconButton>
    </Tooltip>
                </li>
              </ul>

            </div>
          </div>

        </div>

        <Navigation/>


      </header>
    </div>
  )
}

export default Header

