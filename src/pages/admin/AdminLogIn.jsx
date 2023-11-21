import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import bgImage from "../../assets/TopBG.png";

const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
};

const AdminLogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        if(!username || !password) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            });
            
        } else {
            axios.get('http://127.0.0.1:8000/api/login', {params:{usuario: username, contrasena: password}})
            .then(res => {
                if(res.data.mensaje != "Login exitoso.") {
                    Swal.fire({
                        icon: 'error',
                        title: res.data,
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: `Bienvenid@ ${username}` ,
                    });
    
                    navigate("/admin/settings", {
                        replace: ("/admin", true)
                    });
                }

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al ingresar',
                })

                console.log(err);  
            })
        }
    }

    return (
        <div className="min-h-screen w-full bg-no-repeat" style={backgroundStyle}>
            <main className="container flex justify-center mx-auto">
                <article id="userSign" className={`w-3/5 2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2 absolute mt-36 2xl:mt-48 rounded-t-2xl shadow-md rounded-b-xl 
                bg-gradient-to-b from-orangeLight to-orangeDark animate-fade-down animate-once animate-ease-out`}>
                    <h1 id="appTitle" className="mt-10 mb-16 text-white font-extrabold font-title text-4xl text-center">TFG</h1>

                    <form id="userSignIn-form">
                        <div id="form-username" className="flex justify-center">
                            <label htmlFor="username"></label>
                            <input type="text" name="username" id="username" placeholder="Usuario" value={username} required
                                className="w-3/4 mb-10 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                                onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                        <div id="form-password" className="flex justify-center">
                            <label htmlFor="password"></label>
                            <input type="password" name="password" id="password" placeholder="Contraseña" value={password} required
                                className="w-3/4 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <section className="flex justify-center pb-12 mx-10 mt-10">
                            <input type="button" id="button-signIn" value="Iniciar sesión" onClick={handleLogin}
                            className={`w-1/2 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm font-semibold font-title 
                            hover:cursor-pointer hover:scale-105`}/>
                        </section>
                    </form>
                </article> 
            </main>
        </div>
    )
}

export default AdminLogIn;