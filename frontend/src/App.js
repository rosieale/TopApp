//Public pages
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import PetListPage from "./pages/PetListPage";
import RegisterPage from "./pages/RegisterPage";
import ResourcesPage from "./pages/ResourcesPage";

//Common components
import HeaderComponent from "./components/HeaderComponent";
import FooterCompomnent from "./components/FooterComponent";

//User components
import UserChatComponent from "./components/user/UserChatComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

//Protected user pages
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import UserProfilePage from "./pages/user/UserProfilePage";
import UserAdoptionsPage from "./pages/user/UserAdoptionsPage";
import UserPetPodPage from "./pages/user/UserPetPodPage";
import UserAdoptionDetailsPage from "./pages/user/UserAdoptionDetailsPage";
import './App.css';

// Protected Admin pages
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminEditAdoptionPage from "./pages/admin/AdminEditAdoptionPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";


function App() {
  return (
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route element = {<RoutesWithUserChatComponent />}>
 {/*publicly available routes*/}
 <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/pet-details" element={<PetDetailsPage />}/>
      <Route path="/pet-list" element={<PetListPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/resources" element={<ResourcesPage />}/>
      <Route path="*" element="La página que busca no existe. Error 404"/>

      {/*<Route path= "/" component={HomePage} />  in previous */}

      {/*User protected routes */}

      <Route element={<ProtectedRoutesComponent/>}/>
      <Route path="./user" element={<UserProfilePage />}/>
      <Route path="./user/adoptions" element={<UserAdoptionsPage />}/>
      <Route path="./user/pet-pod" element={<UserPetPodPage />}/>
      <Route path="./user/adoption-details" element={<UserAdoptionDetailsPage />}/>

      </Route>
     
      {/*<Route path= "/" component={HomePage} />  in previous */}
      <Route element={<ProtectedRoutesComponent/>}/>
      <Route path="./user" element={<UserProfilePage />}/>
      <Route path="./user/adoptions" element={<UserAdoptionsPage />}/>
      <Route path="./user/pet-pod" element={<UserPetPodPage />}/>
      <Route path="./user/adoption-details" element={<UserAdoptionDetailsPage />}/>

    </Routes>
    <FooterCompomnent />
    </BrowserRouter>
  );
}

export default App;

