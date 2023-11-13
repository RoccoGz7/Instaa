import React, {Component} from 'react'
import './Post.css'
import { Avatar, TextField } from '@mui/material';

import {TextField, Fab} from "@material-ui/core";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

class Post extends Component{

    constructor(props){
        this.state = {
            liked:false,
            bookmarked: false,
            showCommentInput: false
        }
    }

    render() {
        return (
            <div className='post'> 
                <div className='post-header'>
                    <Avatar className='post-avatar' alt='Random' src='' />
                    <h3>{this.props.username}</h3>
                </div>
                
                <img classname='post-image' alt={this.props.caption} src={this.props.imageSrc}/>

                <div className='post-icons'>
                    <div>
                        {
                            !this.state.liked ?
                                <div className='post-icon'>
                                    <FavoriteBorderIcon onClick={(e) =>
                                    this.setState({liked: true})} />
                                </div> :
                                <div className='post-icon'>
                                    <favoriteIcon color = "secondary" onClick ={(e)=>
                                    this.setState({liked: false})}/>
                                </div>
                        }
                        <div className='post-icon'>
                            <ChatBubbleOutLineIcon/>
                        </div>
                        <div className='post-icon'>
                            <SendIcon/>
                        </div>
                        
                    </div>
                    <div>
                        {
                            !this.state.bookmarked ? 
                                <div className='post-icon'>
                                    <BookmarkBorderIcon onClick={(e)=> this.setState
                                    ({bookmarked: true})} />
                                </div>  :
                                <div className='post-icon'>
                                    <BookmarkIcon onClick={(e)=> this.setState(
                                    {bookmarked: false})}/>
                                </div>
                        }
                    </div>
                </div>
            
                <h4 className='post-description'><strong>{this.props.username}</strong>{this.props.caption}</h4>
            {
                this.state.showCommentInput &&
                <form >
                    <TextField id = "comment" label= "Comment"/>
                    <Fab></Fab>
                </form>
            }
            </div>
        );
    }
}

export default Post;
