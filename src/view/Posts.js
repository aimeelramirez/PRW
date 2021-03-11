import React, { Component } from 'react';
// import Post from './Post';
import Spinner from '../components/spinner/spinner';
import { data } from '../data.js';
import Button from '../components/button/button'
import RemovePost from '../reducers/post/post'
//component on props child post
class Posts extends Component {

    // state = {
    //     posts: data

    // }

    // postsLoadHandler = () => {
    //     console.log(data)
    //     let getList = []
    //     data.map(post => {
    //         getList.push(post)
    //         // this.state.posts.push(post)
    //     });
    //     //console.log("updated: ", updateObject(this.state, { posts: data }))
    //     console.log(getList)
    //     //this.setState({ posts:  })
    //     //   updateObject(this.state, { posts: getList })


    // }
    // postSelectedHandler = (post) => {
    //     console.log("You clicked: ", post)
    //     let review = ""
    //     // reducer(this.state.posts, { type: actionTypes.REMOVE_POST, post: post })

    //     //let review = reducer(this.state.posts, { type: actionTypes.REMOVE_POST, post: post })
    //     for (var i = 0; i < this.state.posts.length; i++) {

    //         if (this.state.posts[i] == post) {

    //             this.state.posts.splice(i, 1);
    //             review = this.state.posts
    //         }

    //     }
    //     console.log(this.state.posts)
    //     // return this.state.posts
    //     // to be handled if to click somewhere focus to
    //     this.setState({ posts: review })

    // }
    clickCounter = (e) => {
        e.preventDefault()
        console.log(e.target)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        // this.postsLoadHandler()

        if (data.length < 0) {
            console.log(data.length)
            return <Spinner />
            //return this.posts
        } else {

            // this.posts = data.map(post => {
            //     return (
            //         <Post
            //             text={post.text}
            //             name={post.name}
            //             price={post.price}
            //             clicked={() => this.postSelectedHandler(post)} />
            //     );
            // });

        }
        return (
            <div>
                <section className="Posts" id="post-list">
                    {/* {this.posts} */}
                </section>

                <div>
                    <Button />
                </div>
                <div>
                    <RemovePost />
                </div>


            </div>
        )

    }
}
export default Posts