import './Post.css';

//child props
const Post = (props) => {
    const { text, clicked, name, message } = { ...props }
    return (
        <article className="Post"
            key={text}
            onClick={clicked}>
            <div className="Info">
                <h1>{name}</h1>
                <div className="Message">{message}</div>
            </div>
        </article>
    );
}

export default Post;