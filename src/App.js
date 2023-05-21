import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectBoard from './components/ProjectBoard';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddProjectTask from './components/ProjectTask/AddProjectTask';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Routes>
    <Route exact path="/" Component={ProjectBoard}></Route>
    <Route exact path="/addProjectTask" Component={AddProjectTask}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
