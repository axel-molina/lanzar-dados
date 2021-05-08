import React, {useState} from 'react';
import './App.css';
import AgregarDado from './components/AgregarDado';
import AgregarCaras from './components/AgregarCaras';
import Header from './components/Header';
import { MostrarDados } from './components/MostrarDados';
import TirarDados from './components/TirarDados';
import Error from './components/Error';
import Spinner from './components/Spinner';
import { sumar } from './helper';
import { MostrarResultado } from './components/MostrarResultado';



function App() {

  const [random, setRandom] = useState(0);
  const [random2, setRandom2] = useState(0);
  const [random3, setRandom3] = useState(0);
  const [random4, setRandom4] = useState(0);


  const [mostrarComponenteDado, setMostrarComponenteDado] = useState(false);

  const [mostrarAgregarCaras, setMostrarAgregarCaras] = useState(false);
  const [mostrarAgregarCaras2, setMostrarAgregarCaras2] = useState(false);
  const [mostrarAgregarCaras3, setMostrarAgregarCaras3] = useState(false);
  const [mostrarAgregarCaras4, setMostrarAgregarCaras4] = useState(false);

  const [cargando, setCargando] = useState(false);
  
    // State que guarda la cantidad de caras elegidas de cada dado
  const [caras, setCaras] = useState();
  const [caras2, setCaras2] = useState();
  const [caras3, setCaras3] = useState();
  const [caras4, setCaras4] = useState();

   // State que guarda la cantidad de dados elegidos 
   const [dados, setDados] = useState();

  const [error, setError] = useState(false);

  let resultadoSuma = sumar(random, random2, random3, random4);

  const [componenteResultado, setComponenteResultado] = useState(false);

  return (
    <div className="App">
      <Header
      titulo = 'Lanzar Dados'
      ></Header>

      <AgregarDado 
      setError={setError}
      setDados={setDados}
      setMostrarAgregarCaras={setMostrarAgregarCaras}
      setMostrarAgregarCaras2={setMostrarAgregarCaras2}
      setMostrarAgregarCaras3={setMostrarAgregarCaras3}
      setMostrarAgregarCaras4={setMostrarAgregarCaras4}
      setMostrarComponenteDado={setMostrarComponenteDado}
      setComponenteResultado={setComponenteResultado}
      mostrarComponenteDado={mostrarComponenteDado}
      ></AgregarDado>

      { mostrarAgregarCaras ? <AgregarCaras
      setCaras={setCaras}
      setError={setError}
      mostrarAgregarCaras={mostrarAgregarCaras}
      setMostrarComponenteDado={setMostrarComponenteDado}
      setComponenteResultado={setComponenteResultado}
      ></AgregarCaras> : null}

      { mostrarAgregarCaras2 ? <AgregarCaras
      setCaras2={setCaras2}
      setError={setError}
      mostrarAgregarCaras2={mostrarAgregarCaras2}
      setMostrarComponenteDado={setMostrarComponenteDado}
      setComponenteResultado={setComponenteResultado}
      ></AgregarCaras> : null}

      { mostrarAgregarCaras3 ? <AgregarCaras
      setCaras3={setCaras3}
      setError={setError}
      mostrarAgregarCaras3={mostrarAgregarCaras3}
      setMostrarComponenteDado={setMostrarComponenteDado}
      setComponenteResultado={setComponenteResultado}
      ></AgregarCaras> : null}

      { mostrarAgregarCaras4 ? <AgregarCaras
      setCaras4={setCaras4}
      setError={setError}
      mostrarAgregarCaras4={mostrarAgregarCaras4}
      setMostrarComponenteDado={setMostrarComponenteDado}
      setComponenteResultado={setComponenteResultado}
      ></AgregarCaras> : null}


   <TirarDados
      nombre = 'Tirar dados'
      dados={dados}
      caras={caras}
      caras2={caras2}
      caras3={caras3}
      caras4={caras4}
      setRandom={setRandom}
      setRandom2={setRandom2}
      setRandom3={setRandom3}
      setRandom4={setRandom4}
      setError={setError}
      setCargando={setCargando}
      setMostrarComponenteDado={setMostrarComponenteDado}
      resultadoSuma={resultadoSuma}
      setComponenteResultado={setComponenteResultado}
      >
      </TirarDados>


      { error ? (<Error></Error>) : null }

      { cargando ? <Spinner></Spinner> : null }
      
      { mostrarComponenteDado ? (<MostrarDados
      random={random}
      random2={random2}
      random3={random3}
      random4={random4}
      ></MostrarDados>) : null}

        {componenteResultado ? <MostrarResultado
      resultadoSuma={resultadoSuma}
      ></MostrarResultado> : null}
      
    </div>
  );
}

export default App;
