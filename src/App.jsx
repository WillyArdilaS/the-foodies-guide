import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./data/routes";
import Header from "./components/header/Header"
import Home from "./pages/Home";
import Categorie from "./pages/Categorie"


function App() {
  const EnhancedRoutes = routes.map(({component, path, data, name}) => {
    const EnhancedComponet = <Categorie Component={component} restaurants={data} name={name}/>;
    return <Route key={path} path={path} element={EnhancedComponet} />;
  });
  
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {EnhancedRoutes}
      </Routes>
    </BrowserRouter>
  )
}

export default App