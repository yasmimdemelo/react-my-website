//permitir que ao importar em outro arquivo, possa ser utilizado tudo que há naquele módulo.
export default function Nav() {
    return (
        <nav class="navbar">
            <div class="logo">
                <h1> Yasmim de Melo </h1>
            </div>
            <div class="menu">
                <a href="#">Home</a>
                <a id class="nav-link" href="#about-me">About</a>
                <a id="project" href="#projects">Projects</a>
                <a id="button" href="#contact">Contact-me</a>
            </div>
        </nav>
    )
}