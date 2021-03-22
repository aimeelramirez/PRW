import './Post.css';
import placer from '../../image.svg'
import PropTypes from 'prop-types'

import { FiTrash2, FiEdit } from "react-icons/fi";

//child props
const Post = (props) => {
    //this could be like this  ({ txt, name, message, clicked, edit })=> or this on spread operator
    const { txt, clicked, edit, name, message } = { ...props }
    return (
        <div className="Post">
            <article className="card-feed">
                <div className="clip">
                    <img src={placer} className="profile" alt="description" />
                </div>
                <div className="list-feed" key={txt}>
                    <h2>{name}</h2>
                    <p> {message}</p>
                    <button onClick={clicked}><FiTrash2></FiTrash2></button>
                    <button onClick={edit}><FiEdit /></button>
                </div>
            </article>
        </div>
    );
}
Post.propTypes = {
    txt: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string,
    clicked: PropTypes.func,
    edit: PropTypes.func,

}
export default Post;