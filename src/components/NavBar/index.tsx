import React from 'react'
import Logo from '../Logo'

const NavBar = () => {
  return (
    <header>
      <nav>
       <Logo />
        <div className='nav-bar-actions'>
          <div className='nav-bar-value'>
          <span className='nav-bar-value-quantity'>2 cursos</span>
          <span className='nav-bar-value-price'>R$ 82.00</span>
          </div>
          
          <button className='clean-btn'>Limpar</button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar