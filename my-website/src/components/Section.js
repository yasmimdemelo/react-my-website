export default function Section (props) {

    return (
        <section id="about-me">
            <h2>{props.title}</h2>
            <div class="about" className={props.className}>
                {props.children}
            </div>
        </section>
    )
}