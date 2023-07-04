
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserView from './Components/UserView';
import AddClass from './Components/AddClass';
import Alumnos from './Components/Alumnos';
import ViewStudent from './Views/ViewStudent';
import Edit from './Views/Edit';
import { NavbarMUI } from './Components/NavbarMUI';
import { SignUp } from './Views/SignUp';
import { SignIn } from './Views/SignIn';
import { Dashboard } from './Views/Dashboard';




function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/add-class' element={<AddClass />}/>
      <Route path='/alumnos' element={<Alumnos />}/>
      <Route path='/students/details/:id' element={<ViewStudent />}/>
      <Route path='/students/edit/:id' element={<Edit />} />
     </Routes>
    </div>
  );
}

export default App;
