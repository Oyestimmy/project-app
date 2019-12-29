import React, {Component} from 'react';
import Menu from './Menu'
import Carousels from './Carousels'
import Blog from './Blog'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import Socials from './Socials'
import Nike from './Nike'

class App extends Component {
  render(){
    return(
      <div>
      <Menu/>
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/blog' component={Blog} />
           <Route path='/Nike' component={Nike} />
       </Switch>
      </div>
    )
  }
}

export default App
