import './Post.css';

//child props
const Post = (props) => {
    const { text, clicked, name, email } = { ...props }
    return (
        <article className="Post"
            key={text}
            onClick={clicked}>
            <div className="Info">
                <h1>{name}</h1>
                <div className="Email">{email}</div>
            </div>
        </article>
    );
}

export default Post;