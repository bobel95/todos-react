import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "./layout/MainPage";
import AddTaskPage from "./layout/AddTaskPage";

function App() {
  return (
      <Router>
          <Route exact path="/" component={MainPage}/>
          <Route path="/add" component={AddTaskPage}/>
      </Router>
  );
}

export default App;
