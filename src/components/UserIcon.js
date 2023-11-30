import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../components/AuthContext";

export const UserIcon = () => {

    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const [userName,setUserName] = useState('');

    const handleLogout = () => {
        sessionStorage.clear();
        setAuth(false);
        navigate('/');
    }

    useEffect(() => {
        setUserName(sessionStorage.getItem("userName"));
    }, []);
    

    return (
       
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to='/mi-perfil'>
                    <button type="button" className="btn btn-primary">{userName}</button>
                </Link>
            </li>
            <li className="nav-item">
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={(e) => handleLogout(e)}
                >Logout</button>
            </li>


        </ul>
    )
}
