import bgImage from "../assets/TopBG.png"

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover', 
  backgroundAttachment: 'fixed', 
};

const Categorie = ({ Component, restaurants, name }) => {
  return (
    <>
      <div className="min-h-screen w-full bg-no-repeat"  style={backgroundStyle}>
        <h1 className="w-3/4 xl:w-3/5 mx-auto pt-40 xl:pt-44 pb-6 font-title text-4xl md:text-6xl lg:text-7xl text-center font-black text-black animate-fade-down animate-once 
        animate-ease-out animate-duration-[2500]">TOP <span className="text-orangeDark">10 {name}</span> EN BOGOTÁ</h1>
        <Component restaurants={restaurants} />

      </div>
    </>
  );
};

export default Categorie;
