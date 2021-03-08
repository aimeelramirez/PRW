import './Post.css';

const post = (props) => {
    // console.log(props)
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.name}</h1>
            <div className="Info">
                <div className="Price">${props.price}</div>
            </div>
        </article>
    );
}

export default post;