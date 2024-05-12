import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import PetListPage from "./pages/PetListPage";
import RegisterPage from "./pages/RegisterPage";
import ResourcesPage from "./pages/ResourcesPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import HeaderComponent from "./components/HeaderComponent";
import FooterCompomnent from "./components/FooterComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <HeaderComponent />
        <div className="content-wrap">
          <Routes> 
            <Route element={<RoutesWithUserChatComponent />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/pet-details" element={<PetDetailsPage />} />
              <Route path="/pet-list" element={<PetListPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="*" element={<div>La página que busca no existe. Error 404</div>} />
            </Route>
            <Route element={<ProtectedRoutesComponent />}>
              <Route path="/user" element={<UserProfilePage />} /> 
              {/* Additional user routes */}
            </Route>
          </Routes>
          <FooterCompomnent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;