export default function Header (){
    return (
        <header class="header">
            <div class="headline">
                <h2>Hi there! Welcome.</h2>
                <h3>I'm Yasmim de Melo, a web development student.<br/>
                    My mission is to develop websites with the purpose of helping people.</h3>
                <p>I live in Florianópolis-SC, magic island.</p>
                {/* rel="noreferrer" => evita passar as informações do referenciador para o site de destino removendo as informações de referência do cabeçalho HTTP.*/}
                <a href="https://www.linkedin.com/in/yasmim-de-melo-a5036923b/"  rel="noreferrer"><img src="img/linkedin.png" alt="img linkedin"/></a>
                <a href="https://github.com/yasmimdemelo"  rel="noreferrer"><img src="img/github-sign.png" alt="img github"/></a>
                <a href="https://gitlab.com/yasmimdmf95"  rel="noreferrer"><img src="img/gitlab.png" alt="img gitlab"/></a>
                <a href="https://www.instagram.com/yasmim_demelo/"  rel="noreferrer"><img src="img/instagram.png" alt="img instagram"/></a>
            </div>

            {/*Style inline é object js. Tem quer ser escrito in camel case e entre chaves*/}
            <div class="img-headline">
                <img style={{ maxWidth: "90%" }} src="img/header.png" alt="img header"/>
            </div>
        </header>
    )
}