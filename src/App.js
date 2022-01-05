import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './screens/About'
import Blogs from './screens/Blogs';
import Navbar from './components/navbar/Navbar'
import {Maps} from './screens/Maps'

function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/maps'>
          <Maps/>
        </Route>
        <Route path='/volunteer'>

        </Route>
        <Route path='/blogs'>
          <Blogs />
        </Route>
        <Route path='/'>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
