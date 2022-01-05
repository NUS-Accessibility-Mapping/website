import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Blogs from './screens/Blogs';
import Navbar from './components/navbar/Navbar'
import {Maps} from './screens/Maps'
import Volunteer from './screens/Volunteer'

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/website">
            <Redirect to="/home" />
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/maps'>
            <Maps/>
          </Route>
          <Route path='/volunteer'>
            <Volunteer />
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
