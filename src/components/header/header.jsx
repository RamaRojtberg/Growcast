import React from 'react'

function Header({logo}) {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='contact'>
        <p>Nosotros</p>
        <p>Productos</p>
        <p>Contacto</p>
      </div>
    </div>
  )
}

export default Header
