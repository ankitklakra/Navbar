function Card(props) {

    return (
        <li className="reveal">
            <div class="timeline-content">
            <h2>{props.year}</h2>
            {/* <h1>{props.heading}</h1> */}
            <p>{props.about}</p>
            </div>
        </li>
    );
}

export default Card;