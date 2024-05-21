import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import PetListPage from "./pages/PetListPage";
import RegisterPage from "./pages/RegisterPage";
import ResourcesPage from "./pages/ResourcesPage";
import PodPage from "./pages/PodPage";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AdminLinksComponent from './components/admin/AdminLinksComponent';

import UserProfilePage from "./pages/user/UserProfilePage";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminAdoptionsPage from './pages/admin/AdminAdoptionsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminEditAdoptionPage from './pages/admin/AdminEditAdoptionPage';
import AdminAdoptionsDetailsPage from './pages/admin/AdminAdoptionsDetailsPage';
import AdminPetsPage from './pages/admin/AdminPetsPage';
import AdminCreateAdoptionPage from './pages/admin/AdminCreateAdoptionPage';
import ScrollToTop from './utils/scrollToTop';
import './App.css';

import UserAdoptionsPage from "./pages/user/UserAdoptionsPage";
import UserAdoptionDetailsPage from "./pages/user/UserAdoptionDetailsPage";
import UserPetPodDetailsPage from "./pages/user/UserPetPodDetailsPage";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <ScrollToTop />
        <HeaderComponent />
        <div className="content-wrap">
          <Routes>
            <Route element={<RoutesWithUserChatComponent />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/PetListPage" element={<PetListPage />} />
              <Route path="/PetDetailsPage" element={<PetDetailsPage />} />
              <Route path="/PetDetailsPage/:id" element={<PetDetailsPage />} />
              <Route path="/UserPetPodPage" element={<PodPage />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/RegisterPage" element={<RegisterPage />} />
              <Route path="*" element="Page not exists 404" />
            </Route>

            <Route element={<ProtectedRoutesComponent admin={false} />}>
              <Route path="/user/UserProfilePage" element={<UserProfilePage />} />
              <Route path="/user/UserAdoptionsPage" element={<UserAdoptionsPage />} />
              <Route path="/user/UserPetPodPage" element={<PodPage />} />
              <Route path="/user/UserPetPodDetailsPage" element={<UserPetPodDetailsPage />} />
              <Route path="/user/UserAdoptionDetailsPage" element={<UserAdoptionDetailsPage />} />
            </Route>

            <Route element={<ProtectedRoutesComponent admin={true} />}>
              <Route path="/admin/AdminUsersPage" element={<AdminUsersPage />} />
              <Route path="/admin/AdminEditUserPage" element={<AdminEditUserPage />} />
              <Route path="/admin/AdminAdoptionsPage" element={<AdminAdoptionsPage />} />
              <Route path="/admin/AdminEditAdoptionPage" element={<AdminEditAdoptionPage />} />
              <Route path="/admin/AdminAdoptionsDetailsPage" element={<AdminAdoptionsDetailsPage />} />
              <Route path="/admin/AdminChatsPage" element={<AdminChatsPage />} />
              <Route path="/admin/AdminPetsPage" element={<AdminPetsPage />} />
              <Route path="/admin/AdminCreateAdoptionPage" element={<AdminCreateAdoptionPage />} />
            </Route>
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
