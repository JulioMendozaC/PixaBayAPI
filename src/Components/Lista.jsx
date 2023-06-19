import Imagen from './Imagenes'

const Lista = ({imagenes}) => {
    
    

    return ( 
        <div className="col-12 p-5 row">
            {imagenes.map(imagen =>(

                <Imagen
                key={imagen.id}
                imagen={imagen} 

                />
            ))}
        </div>
     );
}
 
export default Lista;