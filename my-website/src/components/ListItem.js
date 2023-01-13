export default function ListItem (props) {
    return (
        <a href={props.href} target={props.target} rel={props.rel}><img src={props.src} alt={props.alt}/></a>
    )
}