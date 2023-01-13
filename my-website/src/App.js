import "./assets/styles/styles.css";

import Nav from "./components/Nav"
import Header from "./components/Header"
import Section from "./components/Section"
import Cards from "./components/Cards"
import Form from "./components/Form"

import { cardsAboutData } from "./mock/cards";
import { cardsProjectData } from "./mock/card2";

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Header />

      <Section title="About me" className="about">
        {
          cardsAboutData.map(function(item) {
            return (
              <Cards 
                image={item.image}
                alt={item.alt}  
                name={item.name} 
                description={item.description}
                list={item.list} 
              />
            )
          })
        }

      </Section>

      <Section title="Projects" className="about">
        {
            cardsProjectData.map(function(item) {
              return (
                <Cards
                  name={item.name}
                  description={item.description}
                />
              )
            })
          }
      </Section >

      <Form title="Contact-me"/>

      {/*Incluir Footer aqui */}
    </div>
  );
}