import React, { Component } from 'react';
import Spinner from '../../../components/spinner/spinner';
import { data } from '../../../data'
// import Button from '../components/button/button'
import UpdatePost from '../../../reducers/post/updatePost'
// import Portal from '../../../../reducers/portal'
// import * as Icon from "react-icons/fi";

//component on props child post
class Posts extends Component {

    render() {

        if (data.length <= 0) {
            // console.log(data.length)
            // return <div id="Spinner"><Icon.FiLoader /></div>
            return <Spinner />
        }
        return (
            <div className="Body">
                <div className="Posts" id="list-avatars">
                    <UpdatePost />
                </div>
            </div>
        )

    }
}
export default Posts