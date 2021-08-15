import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import dataGrid from "./dataGrid";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className=" sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            React Data Grid MUI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  Data Grid
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="my-3 mx-auto container shadow-sm">
          <Switch>
            <Route exact path="/" component={dataGrid} />
            <Route exact path="/datagrid" component={dataGrid} />
            <Route
              render={() => {
                return <h1 className="text-center">Not Found</h1>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
