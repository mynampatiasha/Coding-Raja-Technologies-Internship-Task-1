import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PagenotFound from './pages/PagenotFound';
import Register from './pages/Auth/Register';
import { AuthProvider } from './context/auth';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPasssword from './pages/Auth/ForgotPassword';
import AdminRoute from "./components/Routes/AdminRouter"
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<PrivateRoute />} />
        <Route path="user" element={<Dashboard />} />
        <Route path="/dashboard" element={<AdminRo />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPasssword/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
    
    </>
  
  );
}

export default App;
