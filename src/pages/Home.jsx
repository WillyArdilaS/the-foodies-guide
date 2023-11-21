import bgImage from "../assets/HomeBG.png"
import img1 from "../assets/HomeImg1.png"
import img2 from "../assets/HomeImg2.png"
import img3 from "../assets/HomeImg3.png"
import img4 from "../assets/HomeImg4.png"
import Header from "../components/header/Header"

const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover'
};

const Home = () => {
  return (
    <>
        <Header />
        
        <div className="min-h-screen bg-cover bg-no-repeat xl:flex"  style={backgroundStyle}>
            <section className="xl:w-4/5"> 
                <h1 className="pt-40 xl:pt-64 xl:pl-24 font-title text-7xl md:text-8xl 2xl:text-9xl text-center xl:text-left font-black text-orangeDark animate-fade-down animate-once animate-ease-out animate-duration-[2500]">The Foodie's Guide</h1>

                <h2 className="pt-12 xl:pt-24 2xl:pt-32 px-8 md:px-12 xl:px-0 xl:ml-24 w-full xl:w-3/4 text-2xl md:text-3xl font-paragraph font-medium text-black animate-fade-down animate-once animate-delay-500 animate-ease-out animate-duration-[2500]">
                    ¡Explora la esencia culinaria de Bogotá con nosotros! Navega por los mejores restaurantes y bares, clasificados según las calificaciones en línea. Desde pizzas irresistibles hasta opciones vegetarianas creativas, te presentamos los favoritos de la ciudad. Prepárate para conocer las diferentes experiencias gastronómica de la ciudad.
                </h2>
            </section>

            <section id="images"  className="flex flex-col items-center md:items-start lg:items-center xl:items-start mt-16 md:mt-20 xl:mt-40 xl:mr-28 2xl:mr-0 w-full xl:w-1/3 md:px-6 lg:px-0">
                <div className="xl:w-2/3 2xl:w-1/2 animate-fade-right animate-once animate-ease-out animate-fill-both">
                    <img src={img1} alt="Imagen del home 1" className="object-cover" />
                </div>

                <div className="xl:w-2/3 2xl:w-1/2">
                    <img src={img2} alt="Imagen del home 2" className="object-cover mt-8 md:-mt-20 md:ml-96 xl:ml-48 xl:-mt-32 animate-fade-left animate-once animate-ease-out animate-fill-both animate-delay-500"/>
                </div>

                <div className="xl:w-2/3 2xl:w-1/2">
                    <img src={img3} alt="Imagen del home 3" className="object-cover mt-8 md:-mt-40 xl:-mt-16 animate-fade-right animate-once animate-ease-out animate-fill-both animate-delay-1000" />
                </div>

                <div className="xl:w-2/3 2xl:w-1/2">
                    <img src={img4} alt="Imagen del home 4" className="object-cover mt-8 mb-12 xl:mb-0 md:-mt-20 md:ml-96 xl:ml-48 xl:-mt-28 animate-fade-left animate-once animate-ease-out animate-fill-both animate-delay-[1500ms]"/>
                </div>
            </section>
        </div>
    </>
  )
}

export default Home