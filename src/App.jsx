import './App.scss';
import './styles/partials/_resets.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navgation';
import HomePage from './pages/HomePage/HomePage';




function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Switch>
        <Route to='/' component={HomePage} />
      </Switch>

    </Router>
    </>
  );
}

export default App;
