import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CreateVendor from './components/CreateVendor';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/addvendor" component={CreateVendor}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;