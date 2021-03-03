import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Menu = () => (
  <Switch>
    <Route path="/Home" component={Home} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Contact" component={Contact} />
  </Switch>
)

export default Menu;