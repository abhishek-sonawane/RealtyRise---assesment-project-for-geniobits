import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/Signin';
import DashboardProfile from './pages/DashboardProfile';
import ProtectedRoute from './pages/ProtectedRoute';
import { ContextProvider } from './context/GlobalContext';
import Signup from './pages/Signup';
import ExplorePage from './pages/ExplorePage';
import SingleListing from './pages/SingleListing';
import Footer from './components/Footer';
import Messages from './pages/Messages';

function App() {
  return (
  <ContextProvider>
     <BrowserRouter >
   <Routes>
    <Route path='/profile' element= {<ProtectedRoute/>}>
      <Route path='/profile' element={<DashboardProfile />} />
    </Route>
    <Route path='/sign-in' element={<Signin/>} />
    <Route path='/register' element={<Signup/>}/>
    <Route path='/' element={<ExplorePage />} />
    <Route path='/messages' element={<Messages/>} />
    <Route path='/explore/:listingId' element={<SingleListing/>} />
   </Routes>
   <Footer />
   <ToastContainer />
   </BrowserRouter>
  </ContextProvider>
  );
}

export default App;
