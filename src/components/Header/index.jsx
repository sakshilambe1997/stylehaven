import React from 'react'
import { Link } from 'react-router-dom'

 const Header = () => {
  return (
    <div>
      <header>
        <div className='top-strip py-2 border-pink-500 border-b-[1px]'>
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
      </header>
    </div>
  )
}

export default Header

