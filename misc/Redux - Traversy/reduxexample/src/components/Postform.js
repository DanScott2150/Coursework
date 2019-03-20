import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [];
        }
    }
   

    render() {
     
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts;