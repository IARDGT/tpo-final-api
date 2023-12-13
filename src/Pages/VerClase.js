
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';


import "./style/VerClases.css";


import { ListaComentariosClase } from "../components/ListaComentariosClase";

import { getClase } from '../controller/clase.controller';


export const VerClase = () => {
  const { id } = useParams();
  const [clase, setClase] = useState({
    claseId: '',
    title: '',
    statusClase: false,
    profesorId: '',
    profesorName: '',
    category: '',
    tipoClase: '',
    frecuencia: '',
    description: '',
    price: '',
    imgUrl: 'https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png',
    comments: [],
    calificacion: 0,
  });

  const { auth, userId } = useAuth();
  const defaultImage = "https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png";

  const onImageError = (error) => {
    console.log("ERROR WHILE LOADING IMG...");
    error.target.src = defaultImage;
  }

  const autorClase = () => {
    if (auth && userId === clase?.profesorId) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const handleClase = async () => {
      try {
        const res = await getClase(id);
        setClase(res);
      } catch (error) {
        console.error('Error al obtener datos del catálogo:', error);
        setClase({});
      }
    };

    handleClase();
  }, [id]);

  console.log('autorClase', autorClase());

  return (
    <>
      <div className="ver-clases-container bg-body-secondary pb-3">
        <div className="row d-flex mx-5 my-2 py-5 justify-content-center align-items-start ver-clases-content-1" >
          <div className="col-lg-6 order-2 order-lg-1">
            <h2>{clase.title}</h2>
            <h5>Calificacion: <span>{clase.calificacion}</span></h5>
            <h5>Precio: ${clase.price}</h5>
            <h5>Duracion: {clase.duracion}</h5>
            <h5>Profesor: <span>{clase.profesorName}</span></h5>
            <p><strong>Experiencia: </strong>{clase.profesorExp} años</p>
            <p><strong>Titulos: </strong>{clase.profesorTitulo}</p>
            <p><strong>Infromacion del profesor: </strong>{clase.profesorBio}</p>
            <p>{clase.description}</p>
            {!autorClase() &&
              <a href={"contratar/" + id}>
                <button type="button" className="btn btn-primary btn-lg mt-2">Inscribirse</button>
              </a>}
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="card-img-top d-flex justify-content-center align-items-center">
              <img
                src={clase.imgUrl}
                className="img-fluid"
                style={{ maxWidth: '100%', height: '20rem', objectFit: 'fill' }}
                alt="Imagen representativa de la clase a crear."
                onError={e => onImageError(e)}
              />
            </div>
          </div>
        </div>
        <div className="ver-clases-content-2">
          <ListaComentariosClase editar={autorClase()} comments={clase.comments} />
        </div>
      </div >
    </>
  )
}

export default VerClase;