export default function Cards (props) {
    return (
        <div class="card" className={props.className}>
            <div class="content-text">
                <img src={props.image} alt={props.alt}/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <ul class="list">{props.list}</ul>
            </div>
        </div>
    )
}