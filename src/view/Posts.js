import React from 'react';
import { updateObject } from "../reducers/utility";
import Post from './Post';
class Posts extends React.Component {
    posts = []
    state = {
        posts: [
            {
                id: 0,
                name: "apples",
                price: "3"
            }, {
                id: 1,
                name: "bananas",
                price: "2"
            },
            {
                id: 2,
                name: "pears",
                price: "4"
            }
        ]
    }
    postsLoadHandler = () => {
        const updatedPosts = this.state.posts.map(post => {
            return {
                ...post
            }
        });
        console.log(updateObject(this.state, { posts: updatedPosts }))
        return updateObject(this.state, { posts: updatedPosts });

    }
    postSelectedHandler = (id) => {
        console.log("You clicked: ", id)
        // to be handled if to click somewhere focus to
    }

    render() {
        this.postsLoadHandler()
        if (this.state.posts) {
            this.posts = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        name={post.name}
                        price={post.price}
                        clicked={() => this.postSelectedHandler(post.id)} />
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    {this.posts}
                </section>
            </div>
        )
    }
}
export default Posts