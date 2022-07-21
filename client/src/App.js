import './App.css';
import Home from './components/home/Home'
import LandingPage from './components/landingPage/LandingPage'
import Form from './components/form/Form'
import CardDetail from './components/cardDetail/CardDetail'
import {BrowserRouter as Routes,Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path = "/" component={LandingPage}/>
      <Route exact path = "/home" component={Home}/>
      <Route exact path = "/home/form" component={Form}/> 
      <Route exact path = "/home/detail/:id" component={CardDetail}/> 
    </Routes>
     

  );
}

export default App;
