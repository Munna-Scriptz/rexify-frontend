import React from 'react'
import logo from '../../../public/Logo.png'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <>
        <nav className='bg-black py-3'> 
            <div className="container">
                <div id='Navbar-Row' className='flex items-center justify-between text-white'>
                    {/* ------------ Image  */}
                    <div className='w-[120px]'><img src={logo} alt="Rexify Logo" /></div>

                    {/* ------------ NavLinks  */}
                    <div>
                        <NavLink to={'/'}>Home</NavLink>
                    </div>

                    {/* ------------ NavButtons  */}
                    <div>

                    </div>

                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar