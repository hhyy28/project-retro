import s from './posts.module.css'
import Posts from './Text/Text'
import React from 'react'
import { useState } from 'react'

const Bibr = (props) => {
    const [textareaText, setTextareaText] = useState("");
    const [posts, setPosts] = useState([]);
    
    const addPostHandler = () => {
        const newPost = {
          id: Math.random(),
          value: textareaText,
          timestamp: new Date(),
        };
        setPosts([...posts, newPost]);
        setTextareaText("");
      };
    return(
        <div className={s.back}>         
            <span>
                <textarea placeholder="Enter post your here ..."
                    value={textareaText}
                    onChange={(e) => setTextareaText(e.target.value)}>  
                </textarea>
                </span>
            <div>
                <button  onClick = {addPostHandler} >
                    add 
                </button>
            </div>
            <span>
                <Posts posts = {posts}/>
            </span>
        </div>
    )
}
export default Bibr