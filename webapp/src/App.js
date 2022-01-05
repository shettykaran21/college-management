import './App.css';
import './style.css';
import Home from './Components/Home';
import TopNav from './Components/TopNav';
import Library from './Components/Library';
import Project from './Components/Project';
import Department from './Components/Department';
import Committee from './Components/Committee';
import SingleDepartment from './Components/SingleDepartment';
import AddBook from './Components/AddBook';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const renderLibrary = () => <Library />;
  const renderHome = () => <Home />;
  const renderProject = () => <Project />;
  const renderDepartment = () => <Department />;
  const renderCommittee = () => <Committee />;
  const renderSingleDepartment = () => <SingleDepartment />;
  const renderAddBook = () => <AddBook />;
  const renderUpdateBook = () => <AddBook />;

  return (
    <div className="App">
      <Router>
        <TopNav />
        <Route exact path="/" component={renderHome} />
        <Route exact path="/library" component={renderLibrary} />
        <Route exact path="/projects" component={renderProject} />
        <Route exact path="/departments" component={renderDepartment} />
        <Route exact path="/committees" component={renderCommittee} />
        <Route
          exact
          path="/department/:dname"
          component={renderSingleDepartment}
        />
        <Route exact path="/library/add" component={renderAddBook} />
        <Route
          exact
          path="/library/update/:bookid"
          component={renderUpdateBook}
        />
      </Router>
    </div>
  );
}

export default App;
