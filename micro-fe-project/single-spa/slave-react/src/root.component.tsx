import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default function Root(props) {
  return <Router basename="/react">
    <div>
      <Link to="/">Home React</Link>
      <Link to="/about">About React</Link>
    </div>
    <Switch>
      <Route path="/"  exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>
}