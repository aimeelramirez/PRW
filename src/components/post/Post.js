import './Post.css';
import placer from '../../image.svg'

import { FiTrash2, FiEdit } from "react-icons/fi";

//child props
const Post = (props) => {
    const { text, clicked, edit, name, message } = { ...props }
    return (
        <div className="Post">
            <div className="card-photo"><div className="clip2"><img src={placer} className="profile" alt="description" /> </div></div>
            <article
                key={text}
                className="Info">
                <h1>{name}</h1>
                <div className="Message">{message}</div>
                <button onClick={clicked}><FiTrash2></FiTrash2></button>
                <button onClick={edit}><FiEdit /></button>
            </article>
        </div>
    );
}
export default Post;