
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';
function App() {
  return (

    <Router>
      <div className="App">
     <h2>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/users/add" element={<AddUser/>} />
        <Route exact path="/users/edit/:userId" element={<EditUser/>} />
        <Route exact path="/users/view/:userId" element={<ViewUser/>} />

        <Route path="*" element ={<PageNotFound />}/>
      

      </Routes>
     
     </h2>

    </div>

    </Router>
    
  );
}

export default App;
