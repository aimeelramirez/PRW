import './Post.css';
// import placer from '../../image.svg'
import PropTypes from 'prop-types'

import { FiTrash2, FiEdit } from "react-icons/fi";

//child props
const Post = (props) => {
    //this could be like this  ({ txt, name, message, clicked, edit })=> or this on spread operator
    const { txt, clicked, edit, email, first, last, title, message, picture } = { ...props }
    return (
        <div className="api-text" key={txt}>
            <div className="clip3">
                <img src={picture} alt="portrait profile" />
            </div>
            <div className="list-feed">
                <ul className="descriptions">

                    <li>{title} {first} {last}</li>
                    <li>{email}</li>
                    <li>{message}</li>
                    <footer>
                        <button onClick={clicked}><FiTrash2></FiTrash2></button>
                        <button onClick={edit}><FiEdit /></button></footer>
                </ul>
            </div>
        </div>
    );
}
Post.propTypes = {
    txt: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    message: PropTypes.string,
    clicked: PropTypes.func,
    edit: PropTypes.func,

}
export default Post;