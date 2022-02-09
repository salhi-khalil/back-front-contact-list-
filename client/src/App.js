
import { Route } from 'react-router-dom';
import './App.css';
import Add from './components/add';

import Home from './components/home';
import List from './components/list';

function App() {
  return (
    <div className="App">


      <Route exact path='/'  component={Home}   />
      <Route exact path='/contacts'  component={List}   />
      <Route exact path='(/addContact|/editContact)'  component={Add}   />
   
    
    
    </div>
  );
}

export default App;
