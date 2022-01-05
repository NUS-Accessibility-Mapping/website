import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './about'
import Blog from './blogs/blog';
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/maps'>

        </Route>
        <Route path='/volunteer'>

        </Route>
        <Route path='/blogs'>
          <Blog />
        </Route>
        <Route path='/'>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
