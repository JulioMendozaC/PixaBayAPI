import {useState} from 'react'
import Error from './Error'


const Form = ({setBusqueda}) => {

    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false)

    const buscarImg = (e) =>{
        e.preventDefault();

            //validar
        if(termino.trim() === '' ){
            setError(true)
            return;
        }
        setError(false);

        // enviar el termino de busqueda hacia el app.jsx
        setBusqueda(termino);
        
    }

    return ( 
        <form 
        onSubmit={buscarImg}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                    type="text"
                    className="form-control form-contol-lg"
                    placeholder="Futbol, Cafe, Tecnología"
                    onChange={e => setTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                    type="submit"
                    className="btn btn-lg btn-danger btn-block"
                    value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Ingresa Una Palabra"/> : null}
        </form>
     );
}
 
export default Form;