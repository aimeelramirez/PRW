import './Post.css';

//child props
const Post = (props) => {
    // console.log(props)
    return (
        <article className="Post"
            key={props.text}
            onClick={props.clicked}>

            <h1>{props.name}</h1>
            <div className="Info">
                <p>???</p>
                <div className="Price">${props.price}</div>
            </div>
        </article>
    );
}

export default Post;