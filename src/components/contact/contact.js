import PropTypes from 'prop-types'

const Contact = (props) => {
    const { index, title, first, last, email, picture } = { ...props }
    return (
        <div className="api-text" key={index}>
            <div className="clip3">
                <img src={picture} alt="portrait profile" />
            </div>
            <div className="list-feed">
                <ul className="descriptions">
                    <li>{title} {first} {last}</li>
                    <li>{email}</li>
                </ul></div></div>
    )
}
Contact.propTypes = {
    index: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
    // clicked: PropTypes.func,
    // edit: PropTypes.func,

}

export default Contact