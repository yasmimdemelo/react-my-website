import "./assets/styles/styles.css";

import Nav from "./components/Nav"
import Header from "./components/Header"
import Section from "./components/Section"

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Header />

      <Section />

      {/*Incluir Footer aqui */}
    </div>
  );
}