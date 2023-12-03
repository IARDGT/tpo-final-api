import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import "./style/CrearClase.css";
import { useState } from 'react';


export const CrearClase = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [tipoClase, setTipoClase] = useState("");
    const [frecuencia, setFrecuencia] = useState("");
    const [duracion, setDuracion] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageSrc = e.target.result;
                document.getElementById('cardImage').src = imageSrc;
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <>
            <div className="crear-clase-container bg-body-tertiary px-5">
                <div className="row d-flex my-2 py-2 justify-content-center align-items-center" >
                    <div className="col-lg-6 justify-content-center order-2 order-lg-1 px-5 px-lg-0">

                        <h2>Crear una clase</h2>
                        <p>
                            Asegúrate de tener un título atractivo, una descripción detallada y un precio justo. 
                            No olvides proporcionar material de apoyo, fomentar la interacción con los estudiantes durante la clase, y animarte a recibir feedback. 
                            Promociona esta clase en redes sociales y actualiza regularmente tu perfil y la información de la clase para atraer a más estudiantes. 
                            ¡Listo para inspirar y enseñar!
                        </p>

                        <form>
                            <h4 className="d-flex mt-4">Datos de la clase:</h4>

                            <div className="form-outline mb-3">
                                <input type="text" id="formNombre" className="form-control form-control-lg"
                                    placeholder="Nombre" />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="text" id="formCategoria" className="form-control form-control-lg"
                                    placeholder="Categoria" />
                            </div>

                            <div className="form-outline mb-3">
                                    <select className="form-control form-control-lg">
                                    <option selected>Tipo de Clase</option>
                                    <option value="Individual">Individual</option>
                                    <option value="Grupal">Grupal</option>
                                </select>
                            </div>

                            <div className="form-outline mb-3">
                                <select className="form-control form-control-lg">
                                    <option selected>Frecuencia de la clase</option>
                                    <option value="Unica">Unica</option>
                                    <option value="Semanal">Semanal</option>
                                    <option value="Mensual">Mensual</option>
                                </select>
                            </div>

                            <div className="form-outline mb-3">

                                <input type="number" id="formDuracion" className="form-control form-control-lg" min="0"
                                    placeholder="Duracion"
                                />

                            </div>

                            <div className="form-outline mb-3">
                                <input type="number" id="formPrecio" className="form-control form-control-lg"
                                    placeholder="Precio" />
                            </div> 

                        </form>
                    </div>
                    <div className="col-lg-6 justify-content-center order-1 order-lg-2">

                        <div className="card mx-4" aria-hidden="true">
                            <div className="card-img-top d-flex justify-content-center align-items-center">
                                <img
                                    id="cardImage"
                                    src={require('../assets/guitarra.jpg')}
                                    className="img-fluid img-crear-clase"
                                    alt="Imagen representativa de la clase a crear."
                                />

                            </div>

                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="col-6">Subir imagen</span>
                                </h5>
                                <p className="card-text text-center">
                                    <p>
                                        Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </p>

                                <div className="input-group mb-3">
                                    <input type="file" accept="image/*" className="form-control" id="imageUpload" onChange={(e) => handleImageUpload(e)}/>
                                    <label className="input-group-text" htmlFor="imageUpload"> <FontAwesomeIcon icon={faUpload}/></label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="px-5 px-lg-0 order-3 ">


                    <div className="col-lg-12 form-outline mb-3">
                        <h4 className="d-flex my-3">Descripción de la clase:</h4>
                        <textarea className="form-control form-control-lg" placeholder="Descripción"></textarea>
                    </div>

                    <div className="col-6 form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Aceptar términos y condiciones
                            </label>
                    </div>
                    <div className="col-6 d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2" type="button"
                            //disabled={isSubmitDisabled}
                        >Crear Clase</button>
                    </div>
                </div>
                </div>

            </div>

        </>
    )
}

export default CrearClase;