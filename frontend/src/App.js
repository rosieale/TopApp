// páginas públicas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import PetListPage from "./pages/PetListPage";
import RegisterPage from "./pages/RegisterPage";
// componentes
import ResourcesPage from "./pages/ResourcesPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterCompomnent from "./components/FooterComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
// páginas de usuario registrado
import UserProfilePage from "./pages/user/UserProfilePage";
import UserAdoptionsPage from "./pages/user/UserAdoptionsPage";
import UserPetPodPage from "./pages/user/UserPetPodPage";
import UserAdoptionDetailsPage from "./pages/user/UserAdoptionDetailsPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent /> {/* Header en todas las páginas */}
      <Routes>
        {/* Rutas con chat de usuario */}
        <Route element={<RoutesWithUserChatComponent />}>
          {/* Rutas públicas accesibles sin autenticación */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pet-details" element={<PetDetailsPage />} />
          <Route path="/pet-list" element={<PetListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          {/* Ruta para manejar rutas no encontradas */}
          <Route path="*" element={<div>La página que busca no existe. Error 404</div>} />
        </Route>

        {/* Rutas de usuario autenticación */}
        <Route element={<ProtectedRoutesComponent />}>
          {/* Sub-rutas dentro de usuario */}
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/adoptions" element={<UserAdoptionsPage />} />
          <Route path="/user/pet-pod" element={<UserPetPodPage />} />
          <Route path="/user/adoption-details" element={<UserAdoptionDetailsPage />} />
        </Route>
      </Routes>
      <FooterCompomnent /> {/* Footer común en todas las páginas */}
    </BrowserRouter>
  );
}

export default App;
