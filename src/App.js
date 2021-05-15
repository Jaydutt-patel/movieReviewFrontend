// import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieList from "./Components/MovieList/movieList";
import MovieDetail from "./Components/MovieDetail/moiveDetail";
import background from "./Assets/background.jpg";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/movies"]} component={MovieList} />
            <Route path="/MovieDetail/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
