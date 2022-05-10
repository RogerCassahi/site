import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import PaginaCursos from "./Components/Cursos";
import PaginaInicio from "./Components/Inicio/Index";
import Nav from "./Components/Nav";
import PaginaProjetos from "./Components/Projetos";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <main>

      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/Cursos" element={<PaginaCursos />} />
        <Route path="/Projetos" element={<PaginaProjetos />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
