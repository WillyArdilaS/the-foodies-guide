import Header from "../components/header/Header";

const Categorie = ({ Component, restaurants }) => {
  return (
    <>
      <Header />
      <Component restaurants={restaurants} />
    </>
  );
};

export default Categorie;
