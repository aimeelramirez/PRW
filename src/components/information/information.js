import PropTypes from "prop-types";

const Information = (props) => {
    const { txt, title, first, last, email, picture, date, username, phone } = {
        ...props,
    };
    return (
        <div className="api-item" key={txt}>
            <div className="clip3">
                <img src={picture} alt="portrait profile" />
            </div>
            <div className="list-feed">
                <ul className="descriptions">
                    <li><label style={{ fontSize: '.7rem' }}>Name:</label>
                        {title} {first} {last}
                    </li>
                    <li><label style={{ fontSize: '.7rem' }}>Username:</label> {username}</li>
                    <li><label style={{ fontSize: '.7rem' }}>Email:</label> {email}</li>
                    <li><label style={{ fontSize: '.7rem' }}>Registered:</label> {date}</li>
                    <li><label style={{ fontSize: '.7rem' }}>Phone:</label> {phone}</li>

                </ul>
            </div>
        </div>
    );
};
Information.propTypes = {
    txt: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    message: PropTypes.string,
    date: PropTypes.string,
    phone: PropTypes.string,


};

export default Information;
