import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PostBody from './templates/post_body';
import axios from 'axios';
import Post_body from "./templates/post_body";
import Avatar from "./atoms/post_author_avatar";
import Hashtags from "./atoms/post_hashtags";
import PostDescription from "./atoms/post_description";
import PostImage from "./atoms/post_image";
import Counter from "./molecules/post_counters";

const PostBody = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    // return (
    //     <div>
    //         <h1>Posts</h1>
    //         <ul>
    //             {posts.map(post => (
    //                 <li key={post.id}>
    //                     <h2>{post.title}</h2>
    //                     <p>{post.body}</p>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

function App() {
    return (
        <div className="post_body" id="post_body">
            <Avatar src="post_author_avatar.png" />
            <div className="post_author_nickname">Juri Dalkin</div>
            <Hashtags tags={hashtags} />
            <PostDescription text="When you trying to be a tough dog, but you actually just look like cute mashed potato XDD" />
            <PostImage src="" />
            <Counter src="like_unliked_icon.png" count={188} />
            <Counter src="repost_icon.png" count={25} />
            <Counter src="views_icon.png" count={342} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
