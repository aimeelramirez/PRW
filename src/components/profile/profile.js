import PropTypes from "prop-types";

// first name
// last name
// street
// city
// state
// postcode
// username
// password
// phone
// picture.

const Profile = (props) => {
  const {
    clicked,
    index,
    username,
    first,
    last,
    street,
    city,
    zipcode,
    email,
    password,
    picture,
  } = { ...props };
  return (
    <section className="change-profile" key={index}>
      <article id="user-info">
        <div className="clip3 profile">
          <img src={picture} alt="portrait profile" />
        </div>
        <div className="profile">
          <p>{username}</p>
          <a href="/#" onClick={clicked}>
            Change Profile Picture
          </a>
        </div>
      </article>

      <article className="list-input">
        <ul className="login-input">
          <li>
            <label>First Name:</label>
            <input
              className="login-input-text"
              type="text"
              name="first"
              placeholder={first}
            />
          </li>
          <li>
            <label>Last Name:</label>
            <input
              className="login-input-text"
              type="text"
              name="last"
              placeholder={last}
            />
          </li>
          <li>
            {" "}
            <label>Street:</label>
            <input
              className="login-input-text"
              type="text"
              name="street"
              placeholder={street}
            />
          </li>
          <li>
            <label>City:</label>
            <input
              className="login-input-text"
              type="text"
              name="city"
              placeholder={city}
            />
          </li>
          <li>
            <label>ZipCode:</label>
            <input
              className="login-input-text"
              type="text"
              name="zipcode"
              placeholder={zipcode}
            />
          </li>
        </ul>

        <ul className="auth-input">
          <li>
            <label>Email:</label>
            <input
              className="login-input-text"
              type="text"
              name="email"
              placeholder={email}
            />
          </li>
          <li>
            <label>Change Password:</label>
            <input
              className="login-input-text"
              type="text"
              name="changePassword"
              placeholder="Enter new password here."
            />
          </li>
          <li>
            <label>Current Password:</label>
            <input
              className="login-input-text"
              type="text"
              name="password"
              placeholder={password}
            />
          </li>
        </ul>
      </article>
    </section>
  );
};

Profile.propTypes = {
  index: PropTypes.string,
  username: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  picture: PropTypes.string,
  clicked: PropTypes.func,
  // edit: PropTypes.func,
};

export default Profile;
