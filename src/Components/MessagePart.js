import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../css/MessagePart.css'
const MessagePart = ()=>
{
    return (
          <div className="icon_main">
               <div className="mail_icon">
                  <span className="mail1"><MailOutlineIcon/></span>
                  <p style={{textAlign:'center',width:'100px'}}>Select an Item to read</p>
               </div>
               <div>
                  
               </div>
               
          </div>
    );
}
export default MessagePart;