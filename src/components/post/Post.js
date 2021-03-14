import './Post.css';
import placer from '../../image.svg'
import PropTypes from 'prop-types'

import { FiTrash2, FiEdit } from "react-icons/fi";

//child props
const Post = ({ txt, clicked, edit, name, message }) => {
    // const { text, clicked, edit, name, message } = { ...props }
    return (
        <div className="Post">
            <div className="card-photo"><div className="clip2"><img src={placer} className="profile" alt="description" /> </div></div>
            <article
                key={txt}
                className="Info">
                <h2>{name}</h2>
                <div className="Message">{message}</div>
                <button onClick={clicked}><FiTrash2></FiTrash2></button>
                <button onClick={edit}><FiEdit /></button>
            </article>
        </div>
    );
}
Post.propTypes = {
    txt: PropTypes.string,
    name: PropTypes.string
}
export default Post;