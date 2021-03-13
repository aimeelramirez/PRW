import React, { Component } from 'react';
import Spinner from '../components/spinner/spinner';
import { data } from '../data.js';
import Button from '../components/button/button'
import AddPost from '../view/navigation/left/message/message'
import UpdatePost from '../reducers/post/post'
import Reducer from '../reducers/reducer'
//component on props child post
class Posts extends Component {
    clickCounter = (e) => {
        e.preventDefault()
        console.log(e.target)
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        if (data.length < 0) {
            console.log(data.length)
            return <Spinner />
        }
        return (
            <div>
                <div className="Posts">
                    <AddPost />
                    <UpdatePost />
                </div>
                <Reducer />
            </div>
        )

    }
}
export default Posts