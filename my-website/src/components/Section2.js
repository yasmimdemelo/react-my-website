export default function Section2 (props) {

    return (
        <section id="projects">
            <h2>{props.title}</h2>
            <div class="about" className={props.className}>
                {props.children}
            </div>
        </section>
    )
}