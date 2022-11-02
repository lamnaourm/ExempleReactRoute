import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import DetailUser from './components/DetailUser';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import User from './components/User';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user' element={<User />} >
          <Route path='admin' element={<Admin />} />
          <Route path='profile' element={<Profile />} />
          <Route path=':userId' element={<DetailUser /> } />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
