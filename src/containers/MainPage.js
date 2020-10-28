
import React, { useEffect } from "react";
import Post from '../components/Post';
import {useSelector, useDispatch} from "react-redux";
import { postAction } from "../redux/post/post.actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const posts= useSelector(state => state.posts);
    const loading = useSelector(state => state.loading)
    
    useEffect(() => {
        dispatch(postAction.getPosts())
    }, [])

    return (
        <div>
            {posts && posts.map(post => {
               
                return <Post post={post}/>
            })}
            
        </div>
    )
}

export default MainPage
