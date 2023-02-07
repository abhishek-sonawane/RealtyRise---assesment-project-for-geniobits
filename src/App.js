import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/Signin';
import DashboardProfile from './pages/DashboardProfile';
import ProtectedRoute from './pages/ProtectedRoute';
import Signup from './pages/Signup';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
   <BrowserRouter >
   <Routes>
    <Route path='/' element= {<ProtectedRoute/>}>
      <Route path='/' element={<ExplorePage />} />
    </Route>
    <Route path='/sign-in' element={<Signin/>} />
    <Route path='/register' element={<Signup/>}/>

   </Routes>
   <ToastContainer />
   </BrowserRouter>
  );
}

export default App;
