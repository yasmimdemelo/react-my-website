export default function Card2 (props) {
    return (
        <div class="card">
            <div class="content-text">
                <img src={props.image} alt={props.alt}/>
                <img src={props.img} alt={props.alt}/>
                <img src={props.imgs} alt={props.alt}/>
                <a href={props.href} target="_blank" rel="noreferrer"><h3>{props.name}</h3></a>
                <p>{props.description}</p>
            </div>
        </div>
    )
}