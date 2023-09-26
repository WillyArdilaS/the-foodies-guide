import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categorie from "./pages/Categorie"
import { routes } from "./data/routes";


function App() {

  const EnhancedRoutes = routes.map(({ component, path,data }) => {
    const EnhancedComponet = <Categorie Component={component} restaurants={data}/>;
    return <Route key={path} path={path} element={EnhancedComponet} />;
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {EnhancedRoutes}
      </Routes>
    </BrowserRouter>
  )
}

export default App