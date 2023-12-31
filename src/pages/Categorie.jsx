import { Link } from "react-router-dom";
import bgImage from "../assets/TopBG.png";
import Header from "../components/header/Header";

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
};

const Categorie = ({ Component, name, bdurl }) => {
  return (
    <>
      <Header />
      
      <div className="min-h-screen w-full bg-no-repeat" style={backgroundStyle}>
        <h1 className="w-3/4 xl:w-3/5 mx-auto pt-40 xl:pt-44 pb-6 font-title text-4xl md:text-6xl lg:text-7xl text-center font-black text-black animate-fade-down 
        animate-once animate-ease-out animate-duration-[2500]">
          TOP <span className="text-orangeDark">{name}</span> EN BOGOTÁ
        </h1>
        <Component bdurl={bdurl}/>
        <div className="flex justify-center mt-4">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mb-6">
            <Link to="/Statistics" state={{bdurl: bdurl}} className="inline-block font-paragraph font-medium text-white hover:scale-105 py-2 px-4">
              Estadísticas
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Categorie;
