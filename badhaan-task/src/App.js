import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CreateVendor from './components/CreateVendor';
import Home from './components/Home';
import AddUser from './components/AddUser'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path="/addvendor" component={CreateVendor}/>
        <Route exact path="/adduser" component={AddUser}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;