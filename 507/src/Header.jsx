import React, {Component} from 'react';
import './header.css';
import logo from './images/logoo.png';
import HomeIcon from '@mui/icons-material/Cottage';
import SendIcon from '@mui/icons-material/Send';
import UserIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


class Header extends Component{
    render(){
        return(
            <div className='header'>
                <img alt="" className='header-logo' src={logo}/>
                
                <div className='header-icons'>
                    <div className='header-icon'>
                        <HomeIcon />
                    </div>
                    <div className='header-icon'>
                        <SendIcon/>
                    </div>
                    <div className='header-icon'>
                        <SearchIcon/>
                    </div>
                    <div className='header-icon'>
                        <AddIcon/>
                    </div>
                    <div className='header-icon'>
                        <FavoriteBorderIcon/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header