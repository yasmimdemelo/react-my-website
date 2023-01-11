//react-dom faz com que possamos trabalhar com o cor do react na dom (web, mobile), aprendemos o cor do react e podemos utilizar em outros lugares
//createoot é uma função js que vai receber quem é o elemento raiz "rootelement".
//document.getElementById é um função que esta buscando no HTML, qual o elemento que tem o id = root.
//rootelement armazena o valor encontrado na root, para usar no createRoot.
//root vai nos retornar algumas opções uma delas é de renderizar um componente.
import { createRoot } from "react-dom/client";  

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <App />
);