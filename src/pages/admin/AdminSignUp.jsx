import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import HeaderAdmin from "../../components/header/HeaderAdmin";
import bgImage from "../../assets/TopBG.png";

const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
};

const AdminSignUp = () => {  
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleCreateUser = (e) => {
        e.preventDefault();

        if(!name || !lastName || !email || !password || !passwordConfirmation) {
            Swal.fire({
                icon: 'info',
                title: 'Faltan campos por llenar',
            })
        } else if(password != passwordConfirmation) {
            Swal.fire({
                icon: 'error',
                title: 'Las contraseñas no coinciden',
            })
        } else {
            axios.post('http://localhost:3000/user', {
                nombre: name,
                apellido: lastName,
                email: email,
                password: password,
                tipo: 1  
            })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: `Administrador creado con éxito` ,
                });

                setName("");
                setLastName("")
                setEmail("");
                setPassword("");
                setPasswordConfirmation("");
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `Error: \n${err.response.data.message}`,
                })
            });
        }
    }

    return (
        <>
            <HeaderAdmin />

            <div className="min-h-screen w-full bg-no-repeat" style={backgroundStyle}>
                <main className="container flex justify-center mx-auto">
                    <article id="userRegister" className="w-2/5 2xl:w-1/3 mt-56 absolute rounded-2xl bg-gradient-to-b from-orangeLight to-orangeDark shadow-md  
                    animate-fade-down animate-once animate-ease-out">
                        <form action="" id="userRegister-form" className="mt-6 pt-10">
                            <div className="w-4/5 flex justify-between mx-auto">
                                <div id="form-name">
                                    <label htmlFor="name"></label>
                                    <input type="text" name="name" id="name" value={name} placeholder="Nombre" className="2xl:w-60 xl:w-52 lg:w-44 sm:w-32 mb-6 px-3 py-2 
                                    rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                                    onChange={(e) => setName(e.target.value)} required/>
                                </div>

                                <div id="form-lastName">
                                    <label htmlFor="lastName"></label>
                                    <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Apellido" className="2xl:w-60 xl:w-52 lg:w-44 sm:w-32 mb-6 
                                    px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                                    onChange={(e) => setLastName(e.target.value)} required/>
                                </div>
                            </div>

                            <div id="form-username" className="flex justify-center">
                                <label htmlFor="username"></label>
                                <input type="email" name="email" id="email" value={email} placeholder="Nombre de usuario" className="w-4/5 mb-6 px-3 py-2 rounded-md 
                                bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                        
                            <div id="form-password" className="flex justify-center">
                                <label htmlFor="password"></label>
                                <input type="password" name="password" id="password" value={password} placeholder="Contraseña" className="w-4/5 mb-6 px-3 py-2 rounded-md 
                                bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setPassword(e.target.value)} required/>
                            </div>

                            <div id="form-confirmPassword" className="flex justify-center">
                                <label htmlFor="confirmPassword"></label>
                                <input type="password" name="confirmPassword" id="confirmPassword" value={passwordConfirmation} placeholder="Confirmar contraseña" 
                                className="w-4/5 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                                onChange={(e) => setPasswordConfirmation(e.target.value)} required/>
                            </div>

                            <section className="flex justify-center pb-10 mt-12">
                                <input type="button" id="button-signUp" value="Crear cuenta" onClick={handleCreateUser}
                                className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm 
                                font-semibold font-title hover:cursor-pointer hover:scale-105`}/>
                            </section>
                        </form>
                    </article>
                </main>
            </div>
        </>
    )
}

export default AdminSignUp