import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
