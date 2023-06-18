import {useState, useEffect} from 'react'
import './App.css'
import Form from './Components/Form'

function App() {

  const [busqueda, setBusqueda] = useState('');

    // useEffect(() =>{

    //   const consultaAPI = async () => {
    //   if(busqueda === '' ) return ;

    //   const paginacion = 30;
    //   const key = '37461499-35c55174b21f2bb625cfecef2';
    //   const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page${paginacion}`

    //     const respuesta = await fetch(url)
    //     const resultado = await respuesta.json()

    //     console.log(resultado)

    //   }
    //   consultaAPI();
    // }, [busqueda])

  return (

    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador De Imagenes</p>
        <Form 
        setBusqueda={setBusqueda}/>
      </div>
    </div>

    )
}

export default App
