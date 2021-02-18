import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Home from './Home.js';
import Footer from './components/footer.js/footerMainPage';
import Hotel from './Hotel'; 
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import {useState} from 'react';
function App() {
  const [isActive,setActive]=useState(false);
  const isActiveFunction=(isActive)=>{
   setActive(isActive);
  }
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact  >
          <Home isActive={isActive} isActiveFunction={isActiveFunction}/>
        </Route>
       <Route path="/hotel">
         <Hotel isActive={isActive} isActiveFunction={isActiveFunction} />

       </Route>
     </Switch>
    < Footer/>
    </div>
    </Router>
  );
}

export default App;


