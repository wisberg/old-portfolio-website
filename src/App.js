import './App.css';
import { Route } from "react-router-dom";
import singlePage from './Components/singlePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableauProject from './Components/TableauProject';
import Resume from './Components/Resume';

function App() {

  return (
      <div className = "App">
          <Route exact path="/" component={singlePage} />
          <Route path="/tableau" component={TableauProject} />
          <Route path="/resume" component = {Resume} />
      </div>
  );
}

export default App;
