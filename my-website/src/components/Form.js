export default function Form(props) {
    return (
        <section id="contact">
            <h2>{props.title}</h2>
            <form action="https://api.staticforms.xyz/submit" method="post" >
                <input  type="hidden" name="accessKey" value="80e35b1b-4e5f-4295-9af8-7cccdc2b634b"/>
                <input type="text" name="name" placeholder="Your Name"/><br/>
                <input type="text" name="email" placeholder="Your Email" /><br/>
                <textarea name="message" placeholder="Leave me your message" rows="6"></textarea><br/>

                <input type="submit" value="Submit"/>
            </form>
        </section>
    )
}