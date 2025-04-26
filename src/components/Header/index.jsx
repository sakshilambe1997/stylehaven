import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../../assets/home-img/logo.jpg"
import Search from '../Search'

 const Header = () => {
  return (
    <div>
      <header>
        <div className='top-strip py-2 border-t-[1px] border-gray-500 border-b-[10px]'>
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

        <div className='header bg-[#ffffcc]  '>
          <div className='container flex items-center justify-between py-2'>
            <div className='col1 w-[20%] '>
              <Link to={"/"}>
              <img src={logo} alt='brand-logo' className='h-[60px] w-[80px] rounded-md'/>
              </Link>

            </div>

            <div className='col2 w-[45%]'>
              <Search/>

            </div>

            <div className='col3 w-[30%]'>

            </div>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header

