import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriasProvider } from "./context/CategoriasProvider";
function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5 mb-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container>
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
