import './App.css';
import Home from './components/Home/Home';
import Peliculas from './components/Peliculas/Peliculas';
import Pelicula from './components/Pelicula/Pelicula';
import Barranavegacion from './components/BarraNavegacion/BarraNavegacion';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Barranavegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/home" element={<Home/>}/>
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/pelicula/:id/:title" element={<Pelicula />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
