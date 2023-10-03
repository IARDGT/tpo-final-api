import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Catalogo } from "./Pages/Catalogo";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { CrearClase } from './Pages/CrearClase';
import { VerClase } from './Pages/VerClase';
import { ContratarClase } from './Pages/ContratarClase';
import { VerClaseContratada } from './Pages/VerClaseContratada';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { NavbarAuth } from './components/NavbarAuth';
import { ListaClasesProfesor } from './Pages/ListaClasesProfesor';
import { ListaClasesContratadas } from './Pages/ListaClasesContratadas';
import { useAuth } from './components/AuthContext';


export const App = () => {
    const { auth } = useAuth();

    return (
        <BrowserRouter >
            {auth ? <NavbarAuth /> : <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="catalogo" element={<Catalogo />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="crear-clase" element={<CrearClase />} />
                <Route path="ver-clase" element={<VerClase />} />
                <Route path="contratar-clase" element={<ContratarClase />} />
                <Route path="ver-clase-contratada" element={<VerClaseContratada />} />
                <Route path="mis-clases" element={<ListaClasesProfesor />} />
                <Route path="lista-clases-contratada" element={<ListaClasesContratadas />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}