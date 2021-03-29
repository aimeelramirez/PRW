import PropTypes from "prop-types";

const News = (props) => {
  const { txt, title, first, last, email, picture, message } = { ...props };
  return (
    <div className="api-text" key={txt}>
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
        </ul>
      </div>
    </div>
  );
};
News.propTypes = {
  txt: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
  message: PropTypes.string,
};

export default News;
