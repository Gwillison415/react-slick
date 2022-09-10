import React from "react";
import NavBar from "./components/Movies/NavBar";
import Form from "./components/Form/Form";
import Message from "./components/Form/Message";
import About from "./components/About";
import "./App.css";
import SearchResults from "./components/Movies/SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const routes = ["About", "Search", "Form"];
function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route path="/form">
              {" "}
              <Form isFormValid></Form>
              <Message isFormValid></Message>
            </Route>
            <Route path="/about">
              {" "}
              <About></About>
            </Route>
            <Route path="/search">
              <SearchResults></SearchResults>
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
