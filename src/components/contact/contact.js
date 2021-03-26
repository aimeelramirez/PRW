import PropTypes from 'prop-types'
import { FiTrash2, FiEdit } from "react-icons/fi";

const Contact = (props) => {
    const { txt, title, first, last, email, picture, message, clicked, edit } = { ...props }
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
    )
}
Contact.propTypes = {
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

export default Contact