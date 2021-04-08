import PropTypes from "prop-types";
import { FiThumbsUp, FiThumbsDown, FiTrash2, FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = (props) => {
  const { txt, title, first, last, email, picture, message, like, dislike, clicked, edit } = {
    ...props,
  };
  return (
    <div className="api-item" key={txt}>
      <div className="clip3">
        <img src={picture} alt="portrait profile" />
      </div>
      <div className="list-feed">
        <ul className="descriptions">
          <li>
            {title} {first} {last}
          </li>
          <li>{email}</li>
          <li>{message}</li>
          <footer>
            <button onClick={like}>
              <FiThumbsUp />
            </button>
            <button onClick={dislike}>
              <FiThumbsDown />
            </button>
            <button onClick={clicked}>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <FiTrash2 />
              </motion.div>
            </button>

            <button onClick={edit}>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <FiEdit />
              </motion.div>
            </button>

          </footer>
        </ul>
      </div>
    </div>
  );
};
Contact.propTypes = {
  txt: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
  message: PropTypes.string,
  like: PropTypes.func,
  dislike: PropTypes.func,
  clicked: PropTypes.func,
  edit: PropTypes.func


};

export default Contact;
