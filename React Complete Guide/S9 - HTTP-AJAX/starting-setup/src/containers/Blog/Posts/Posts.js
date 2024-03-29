import React, { Component } from 'react';
import axios from '../../../axios';
import { Route, Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

import FullPost from '../FullPost/FullPost';

class Posts extends Component{
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Dan Scott'
                    }
                })
                this.setState({ posts: updatedPosts });
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true })
            });
    }



    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render(){
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id}>
                        <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>
                )
            });
        }

        return(
          <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path="/:id" component={FullPost} />
          </div>
        );
    }
}

export default Posts;