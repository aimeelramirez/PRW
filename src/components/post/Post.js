import "./Post.css";
// import placer from '../../image.svg'
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { FiTrash2, FiEdit } from "react-icons/fi";

//child props
const Post = (props) => {
  //this could be like this  ({ txt, name, message, clicked, edit })=> or this on spread operator
  const { id, clicked, edit, email, first, last, title, message, picture } = {
    ...props,
  };
  return (

    <div className="api-item" key={id}>
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
Post.propTypes = {
  id: PropTypes.number,
  first: PropTypes.string,
  last: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
  message: PropTypes.string,
  clicked: PropTypes.func,
  edit: PropTypes.func,
};
export default Post;
