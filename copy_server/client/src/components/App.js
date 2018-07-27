import React, { Component } from "react"; // ES2015 modules
import {
  BrowserRouter /* tells react rounter how to behave, look at url and set the components */,
  Route /* to set a rool between a certen route that the user might visit and the set of components that will be visible on the screen */
} from "react-router-dom"; // they are both a react component
import { connect } from "react-redux";
import * as actions from "../actions"; // take all actions and assign them to the action object

import Header from "./Header";
import Landing from'./Landing';
// dummy components
const Dashboard = () => <h2>Dashboard</h2>;
const ServeyNew = () => <h2>ServeyNew</h2>;

// Functional Componet : const App = () => { return (div); }
// we want to fetch our user only very fist time
// refactor to Class based Component
class App extends Component {
  // action creator
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={ServeyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
} // in jsx exact={true} === exact
// <Header /> is a component. the contact of header cares redux, the router
// <Route is trittet like a component or route

export default connect(null, actions)(App);
