import {useState, useEffect} from 'react'
import './App.css'
import Form from './Components/Form'
import Lista from './Components/Lista'

function App() {

  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [paginadoActual, setPaginadoActual] = useState(1);
  const [paginado, setPaginado] = useState(5);

    useEffect(() =>{

      const consultaAPI = async () => {
      if(busqueda === '' ) return ;

      const paginacion = 30;
      const key = '37461499-35c55174b21f2bb625cfecef2';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page${paginacion}&page=${paginadoActual}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setImagenes(resultado.hits)

        //calcular total paginas
        const totalPaginado = Math.ceil(resultado.totalHits / paginacion)
        setPaginado(totalPaginado)

        //Mover pantalla hacia ariba
        const jumbotron = document.querySelector('.jumbotron')
        jumbotron.scrollIntoView({behavior: 'smooth'});
      }
      consultaAPI();
    }, [busqueda, paginadoActual])

    const Anterior = () => {

     const paginaActual = paginadoActual -1;
     
      if(paginaActual === 0) return 
      
      setPaginadoActual(paginaActual)

    }

    const Siguiente = () => {

     const paginaActual = paginadoActual + 1;
     
      if(paginaActual > paginado) return 

      setPaginadoActual(paginaActual)

    }

  return (

    <div className="container">
      <div className="jumbotron" id='jumbotron'>
        <p className="lead text-center">Buscador De Imagenes</p>
        <Form 
        setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <Lista
          imagenes={imagenes}
        />
       
       {(paginadoActual === 1 ) ? null : (
         <button 
         type="button"
         className="bbtn btn-info mr-1"
         onClick={Anterior}>
         &laquo; Anterior
       </button>
       ) }

      {paginadoActual === paginado ? null : (
          <button 
          type="button"
          className="bbtn btn-info"
          onClick={Siguiente}>
          Siguiente  &raquo;
        </button>

      )}
      
      </div>
    </div>

    )
}

export default App
