import bgImage from "../../assets/TopBG.png";
import CategoriesTable from "../../components/admin/CategoriesTable";
import HeaderAdmin from "../../components/header/HeaderAdmin";

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
};

const AdminSettings = () => {
  return (
    <>
      <HeaderAdmin />
      
      <div className="min-h-screen w-full bg-no-repeat" style={backgroundStyle}>
        <div className="pt-48"></div>

        <CategoriesTable />
      </div>
    </>
  );
};

export default AdminSettings;
