import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/assets";
import Footer from "./components/Footer/Footer";
import Product from './pages/Product';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Result from './pages/Result/Result';
import Main from './pages/Main';
import Registro from './pages/Registro/Index';


function App() {
  return ( 
    <>
    <Router>
    <Header/>
      <Switch>
      <Route exact path='/'> <Main /> </Route>
      <Route path='/products'> <Product /> </Route>
      <Route path='/detalle/:id'> <Detail /> </Route>
      <Route path='/result/buscar'> <Result /> </Route>
      <Route path='/user/registro'> <Registro /> </Route>
      <Route component={NotFound}/>
    </Switch>
    
    <Footer/>
    </Router>
    
    </>
  );
}

export default App;
