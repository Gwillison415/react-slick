import React from "react";
import NavBar from "./components/Presentational/NavBar";
import GraphTraversal from "./components/Graph/GraphTraversal";
import Navigation from "./components/HackerMaps/Navigation";
import FuncForm from "./components/Form/FuncForm";
import About from "./components/About";
import { Survey } from "./components/Questionaire";
import "./App.css";
import SearchResults from "./components/Movies/SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const routes = [
  "About",
  "Search",
  "Form",
  "Questionaire",
  "Graph",
  "HackerMaps",
];

const locations = [
  "Lombard St, San Francisco, CA, USA",
  "PIER 39, The Embarcadero, San Francisco, CA, USA",
  "Golden Gate Bridge, San Francisco, CA, USA",
  `Fisherman's Wharf, San Francisco, CA, USA`,
  "Alcatraz Island, San Francisco, CA, USA",
];
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
            <Route path="/hackermaps">
              {" "}
              <Navigation locations={locations} />
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
