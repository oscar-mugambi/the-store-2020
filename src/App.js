import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  //to close subscription when we unmount
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user);

      //check if signed in
      if (userAuth) {
        //we get the userRef from the firebase function and now we are passing back the userRef object. We do so to check if the our db has updated at that reference.(It hasn't) the moment it runs, it returns a snapshot obj representing the data stored on the db

        const userRef = await createUserProfileDocument(userAuth);
        // If there is a document there we will get back the  userRef, if there isnt a doc we create a doc and get back the userRef

        // same as calling onoath state change
        //we subscribe / listen to the userRef for any changes...we'll also get back the first state of that data (snapShot)
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state); //set state is asynchronous
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth }); //setting user to the null we get back from the auth library
      }
    });
  }

  //to close the subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
