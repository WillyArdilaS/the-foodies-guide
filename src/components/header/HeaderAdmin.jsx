import { useState } from "react";
import { Link } from "react-router-dom";


const HeaderAdmin = () => {
    const [onToggle, setOnToggle] = useState(false);    

    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap fixed p-8 w-full z-10 pin-t bg-yellowDark">
                <div className="flex items-center flex-no-shrink ml-2 md:ml-6 lg:ml-16" id="nav-logo">
                    <Link to="/admin/home" className="text-black no-underline hover:text-white"><span className="text-3xl font-paragraph font-semibold"> TFG </span></Link>
                </div>

                <div className="block lg:hidden mr-2 md:mr-6">
                    <button id="nav-toggle" className="flex items-center px-3 py-2 text-black border-grey-dark hover:text-white hover:border-white hover:scale-110"
                        onClick={() => setOnToggle(!onToggle)}>
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div className={`w-full flex-grow lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 ${onToggle == true ? "" : "hidden"}`} id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl">
                        <li className="mr-8">
                            <Link to="/admin/signUp" className="inline-block font-paragraph font-medium text-white hover:text-white hover:scale-110 py-2 px-4" 
                            onClick={() => setOnToggle(false)}>Registrar</Link>
                        </li>
                        <li className="mr-8">
                            <Link to="/admin" className="inline-block font-paragraph font-medium text-white hover:text-white hover:scale-110 py-2 px-4" 
                            onClick={() => setOnToggle(false)}>Cerrar sesión</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderAdmin