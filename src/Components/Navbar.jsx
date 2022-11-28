import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import '../Styles/Navbar.css';

const Navbar = () => {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <nav className={toggle?'navbar expanded':'navbar'}>
        <h2 className='logo'> VARMA TIMES</h2>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={28}/>}
        </div>
        <ul className='links'>
          <Link to='/' style={{textDecoration: 'none'}}> <li>Home</li> </Link>
          <Link to='/sports' style={{textDecoration: 'none'}}> <li>Sports</li> </Link> 
          <Link to='/bussiness' style={{textDecoration: 'none'}}> <li>Bussiness</li> </Link>
          <Link to='/tech' style={{textDecoration: 'none'}}> <li>Tech</li> </Link>
          <Link to='/categories' style={{textDecoration: 'none'}}> <li>All Categories</li> </Link>
        </ul>
    </nav>
  )
}

export default Navbar;