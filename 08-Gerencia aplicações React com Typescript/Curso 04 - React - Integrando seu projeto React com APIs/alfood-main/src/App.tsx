import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import PaginaBaseAdmin from './paginas/Administracao/Restaurantes/PaginaBaseAdmin';
import AdministracaoPratos from './paginas/Administracao/Pratos/AdministracaoPratos';
import FormularioPratos from './paginas/Administracao/Pratos/FormularioPratos';
import Restaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import FormRestaurante from './paginas/Administracao/Restaurantes/FormularioRestaurante';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin" element={<PaginaBaseAdmin />}>
        <Route path="restaurantes" element={<Restaurantes />} />
        <Route path="restaurantes/novo" element={<FormRestaurante />} />
        <Route path="restaurantes/:id" element={<FormRestaurante />} />

        <Route path="pratos" element={<AdministracaoPratos />} />
        <Route path="pratos/novo" element={<FormularioPratos />} />
      </Route>
    </Routes>
  );
}

export default App;
