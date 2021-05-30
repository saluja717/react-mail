import React from 'react'
import '../css/Navbar.css'
import Outlook  from '../image/outlook.png' 
import MessageIcon from '@material-ui/icons/Message';
const Navbar = ()=>
{
    return (
          <div>
              <div className="header">
                <div className="main_header">
                  <img className="image" src={Outlook} alt="Outlook_image" />
                  <h2 className="title">OutLook Mail</h2>
                  </div>
                  <div className="mess_icon"><MessageIcon/></div>
              </div>
          </div>
    );
}
export default Navbar;