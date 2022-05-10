import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriasProvider } from "./context/CategoriasProvider";
function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container>
          <Formulario />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
