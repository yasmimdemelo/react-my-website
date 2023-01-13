export default function Footer (props) {
    return (
        <footer >
            <div class="baseboard" className={props.className}>
                <h1 class="myweb">{props.title}</h1>
                    {props.children}
            </div>
    </footer>
    )
}