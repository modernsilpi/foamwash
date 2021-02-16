import logo from './logo.svg';
import './App.css';
import Navi from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import HomepageLayout from "./components/navbar/homapage";
import Home from './components/navbar/home';
import Contact from './components/navbar/contact';

const Routing = () => {
  return (
    <Switch>
    <Route path="/contact" component={Contact} /> 
    <Route path="/" component={Home} /> 
   
    </Switch>
  );
  
}

function App() {
  return (
    <BrowserRouter>
     <Navi />
     <Routing />
    </BrowserRouter>
  );
}

export default App;
