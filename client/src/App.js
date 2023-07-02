
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn'
import UserView from './Components/UserView';
import AddClass from './Components/AddClass';
import Alumnos from './Components/Alumnos';
import ViewStudent from './Views/ViewStudent';
import Edit from './Views/Edit';
import { NavbarMUI } from './Components/NavbarMUI';




function App() {
  return (
    <div className="App">
      <NavbarMUI />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/sign-in'element={<SignIn />}/>
      <Route path='/user-view' element={<UserView />}/>
      <Route path='/add-class' element={<AddClass />}/>
      <Route path='/alumnos' element={<Alumnos />}/>
      <Route path='/students/details/:id' element={<ViewStudent />}/>
      <Route path='/students/edit/:id' element={<Edit />} />

      
     </Routes>
    </div>
  );
}

export default App;
