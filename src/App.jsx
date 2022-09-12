import React from "react";
import NavBar from "./components/Layout/NavBar";
import GraphTraversal from "./components/Graph/GraphTraversal";
import FuncForm from "./components/Form/FuncForm";
import About from "./components/About";
import { Survey } from "./components/Questionaire";
import "./App.css";
import SearchResults from "./components/Movies/SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const routes = ["About", "Search", "Form", "Questionaire", "Graph"];
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route path="/form">
              {" "}
              <FuncForm></FuncForm>
            </Route>
            <Route path="/questionaire">
              {" "}
              <Survey></Survey>
            </Route>
            <Route path="/search">
              <SearchResults></SearchResults>
            </Route>
            <Route path="/graph">
              <GraphTraversal></GraphTraversal>
            </Route>
            <Route path="/about">
              {" "}
              <About></About>
            </Route>
            <Route path="/">
              <SearchResults></SearchResults>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
