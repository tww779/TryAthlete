import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//API
import API from "./utils/API";
import Wrapper from "./components/Wrapper/Wrapper";
import NavbarArea from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Goals from "./components/Goals/Goals";
import Challenges from "./components/Challenges/Challenges";
import Badges from "./components/Badges/Badges";
import Social from "./components/Social/Social";
// import NoMatch from "./components/NoMatch/NoMatch";
import './App.css';
import { runInContext } from 'vm';

class App extends Component {
  state = {
    user: {},
    hasUser: false
  }
  componentDidMount() {
    this.loadUser();
  }

  // When this component mounts, grab the user with the _id of this.props.match.params.id
  loadUser = () => {
    //set the string here to whatever the id of the user in your db is! Use compass or ROBO 3t to see the id

    API.getUser("5cd70f770d2fed1c848cbf6c")
      .then(res => {
        this.setState({ user: res.data, hasUser: true })
      })
      .catch(err => console.log(err));
  }

  render() {
    const user = this.state.user;
    return (
      <Router>
        {this.state.hasUser ? (
        <Wrapper>
          <NavbarArea>{user}</NavbarArea>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} user={user} />} />
              <Route exact path="/dashboard" render={(props) => <Dashboard {...props} user={user} />} />
              <Route exact path="/goals" render={(props) => <Goals {...props} user={user} />} />
              <Route exact path="/challenges" render={(props) => <Challenges {...props} user={user} />} />
              <Route exact path="/badges" render={(props) => <Badges {...props} user={user} />} />
              <Route exact path="/social" render={(props) => <Social {...props} user={user} />} />
              <Route exact path="/profile" render={(props) => <Profile {...props} user={user} />} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
        </Wrapper>) : (<h1> </h1>)}
      </Router>
    )
  }
}
export default App;
