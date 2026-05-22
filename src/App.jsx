import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ContenedorProductos } from "./components/Produc/ContenedorProductos";
import { Directorio } from "./components/Trajetas/Directorio";
import { FormContainer } from "./components/Form/FormContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="productos">
          <h2>Productos</h2>
          <ContenedorProductos />
        </section>

        <section id="directorio">
          <Directorio />
        </section>
        <section id="contacto">
          <h2>Contacto</h2>
          <FormContainer />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
