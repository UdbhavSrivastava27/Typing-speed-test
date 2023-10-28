import React from 'react';
import AccountCircle from './AccountCircle';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'.3rem'}}>
      <span className='logo'>Start Typing</span>
      <span style={{padding:"3rem"}} onClick={()=>navigate('/')}><KeyboardIcon  size="6em"/></span>
      </div>
      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
}

export default Header;
