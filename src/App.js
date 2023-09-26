import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/assets";
import Footer from "./components/Footer/Footer";
import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Result from './pages/Result/Result';



function App() {
  return ( 
    <>
    <Router>
    <Header/>
      <Switch>
      <Route exact path='/'> <Main /> </Route>
      <Route path='/products'> <Main /> </Route>
      <Route path='/detalle/:id'> <Detail /> </Route>
      <Route path='/result/buscar'> <Result /> </Route>
      <Route component={NotFound}/>
    </Switch>
    
    <Footer/>
    </Router>
    
    </>
  );
}

export default App;
