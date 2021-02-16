import logo from './logo.svg';
import './App.css';
import Navi from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import HomepageLayout from "./components/navbar/homapage";
import Home from './components/navbar/home';
import Contact from './components/navbar/contact';
import Book from './components/navbar/book';
import About from './components/navbar/about';

const Routing = () => {
  return (
    <Switch>
    <Route exact path="/" component={Home} /> 
    <Route path="/book" component={Book} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} /> 
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
