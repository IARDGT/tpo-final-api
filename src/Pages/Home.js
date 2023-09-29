import { ListaClases } from "../components/ListaClases";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import { Comentario } from "../components/Comentario";
import { PasosClase } from "../components/PasosClase";

import "./style/Home.css";


export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-conteiner">
                <div className="home-vitrina">
                    <div className="content-vitrina">
                        <h1 >Encuentra tu clase ideal,
                            con tu profesor ideal</h1>
                        <Search />
                    </div>
                </div>
                <PasosClase />
                <div className="clases-home">
                    <h2>Aqui te mostramos algunas de nuestras clases</h2>
                    <h3>En línea o presencial, elige entre más de 100 clases disponibles.</h3>
                    <ListaClases cantidad={8} misClase={false} urlClase="ver-clase" />
                </div>
                <div className="comentarios-home">
                    <h2>Comentarios de Nuestros Alumnos</h2>
                    <div className="grid2x2">
                        <div className="box box1">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                        <div className="box box2">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                        <div className="box box3">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                        <div className="box box4">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                    </div>
                </div>
                <div className="registrar-home">
                    <h2>¡Convertite en Profesor!</h2>
                    <div className="grid2x2">
                        <div className="box box1">
                            <h3>Unete a nuestra comunidad de enseñanza y comparte tu conocimiento con el mundo.</h3>
                        </div>
                        <div className="box box2 d-flex flex-row mb-1">
                            <button type="button" className="btn btn-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px', width: "150px", height: "50px" }}>Join us</button>
                            <button type="button" className="btn btn-outline-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px', width: "150px", height: "50px" }}>Contact us</button>
                        </div>
                    </div>
                </div>
                <div className="logo-empresas">
                    <h2>Empresas que nos recomiendan</h2>
                    <div className="d-flex flex-row mb-1 lista-logos">
                        <img src={require('../assets/logo_mercadolibre.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_santander.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_accenture.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_rappi.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_netflix.png')}  className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}