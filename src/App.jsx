import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./data/routes";
import Home from "./pages/Home";
import Categorie from "./pages/Categorie"
import Statistics from "./pages/Statistics";
import AdminLogIn from "./pages/admin/AdminLogIn";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminSignUp from "./pages/admin/AdminSignUp";


function App() {
  const EnhancedRoutes = routes.map(({component, path, name, bdurl}) => {
    const EnhancedComponet = <Categorie Component={component} name={name} bdurl={bdurl} />;
    return <Route key={path} path={path} element={EnhancedComponet} />;
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        {EnhancedRoutes}
        
        <Route path="/admin">
          <Route path="" element={<AdminLogIn />}/>
          <Route path="home" element={<AdminSettings />}/>
          <Route path="signUp" element={<AdminSignUp />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App