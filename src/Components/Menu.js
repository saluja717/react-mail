import React,{useState} from 'react';
import '../css/Menu.css'
import SearchIcon from '@material-ui/icons/Search';
import Folder from '../Components/Folder.js'
import Mainbar from '../Components/Mainbar'
import MessagePart from '../Components/MessagePart'
const Menu = ()=>
{
    const [searchValue, setSearchValue] = useState("");
  const [activeFolder, setactiveFolder] = useState("Inbox");

  const handleFolderClick = (Name) => {
    setactiveFolder(Name);
  };

    return (
      <div className="main_menu">
         <div className="sidebar"> 
          <div className="header_menu">
               <input placeholder="Search Mail and People"/>
               <div className="make_right"><SearchIcon/></div>
          </div>
          
          <div className="sidebars">
               <h2>Folders</h2>
               <Folder
          Name="Inbox"
          unread_count={5}
          highlighted={activeFolder === "Inbox"}
          handleFolderClick={handleFolderClick}
        />
        <Folder
          Name="Spam"
          unread_count={4}
          highlighted={activeFolder === "Spam"}
          handleFolderClick={handleFolderClick}
        />
        <Folder
          Name="Deleted Items"
          unread_count={0}
          highlighted={activeFolder === "Deleted Items"}
          handleFolderClick={handleFolderClick}
        />
        <Folder
          Name="Custom Folder"
          unread_count={0}
          highlighted={activeFolder === "Custom Folder"}
          handleFolderClick={handleFolderClick}
        />
        </div>      
         
         </div>
         <div className="mainbar">
            <Mainbar/>
         </div>  
          
          <div className="message">
              <MessagePart/>
          </div>


      </div>

    );
}
export default Menu; 