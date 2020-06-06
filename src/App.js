import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// import Formulario from './components/Formulario';
import FormHook from './components/FormHook'; 
import {Example1} from './components/Example1';
import Binary from './components/Binary';
import {Comentario} from './components/Comentario';
import { Nosotros } from './components/Nosotros';
import { User } from './components/User';
function App() {

  const sujeto = {
    nombre: 'Juanito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum est obcaecati aperiam, excepturi tempore reprehenderit facilis explicabo! Incidunt sapiente dolorem earum error deserunt sed ipsum labore cumque, officia ipsam. Fugit.'
  }
  return (
    <Router>
      <div className="container mt-3">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/binary" className="btn btn-dark">
            Formulario Binario
          </Link>
          <Link to="/formhook" className="btn btn-dark">
            Formulario Hook
          </Link>
          <NavLink to="/form" className="btn btn-dark" activeClassName="active">
            Formulario Principal
          </NavLink>
          <NavLink to="/nosotros" className="btn btn-dark" activeClassName="active">
            Nosotros
          </NavLink>
        </div>
        <hr/>
        <Switch>
        ||<Route path="/nosotros/:id">
            <User/>
          </Route>
          <Route path="/binary">
            <Binary></Binary>
          </Route>
          <Route path="/formhook">
            <Comentario sujeto={sujeto}/>
            <FormHook></FormHook>
          </Route>
          <Route path="/form">
            <Example1></Example1>
          </Route>
          <Route path="/nosotros" >
            <Nosotros/>
          </Route>
          <Route path="/" exact>
            Esta es la pagina de inicio
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
