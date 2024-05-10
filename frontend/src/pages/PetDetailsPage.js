import {useParams} from 'react-router-dom'

const PetDetailsPage = () => {
    const {id} = useParams ();
    console.log(id);
    return <p>Esta es la Página de detalles de mascota</p>
}

export default PetDetailsPage;

























/* estoy haciendo una app para adopcion de animales. quiero que sea una app que de solucion a la sobrepoblacion de mascotas sin hogar en refugios de animales y en las calles. Quiero que personas que quieren dar en adopcion y otros que quieran adoptar puedan registrarse en la pagina y subir nuevos animales que necesitan ser rescatados, poder poner la información especifica de los animales, y que así haya más exposicion de ellos y puedan ser adoptados más eficientemente. Estoy haciendolo en una App MERN en Visual studio code. Me podrías dar sugerencias sobre como puedo estructurar la app y qué paginas utiles podría agregar?
*/ 