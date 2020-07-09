import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMADtCaIB2oP6WRC54em_7ubTOUkS_bj4",
  authDomain: "the-store-4097c.firebaseapp.com",
  databaseURL: "https://the-store-4097c.firebaseio.com",
  projectId: "the-store-4097c",
  storageBucket: "the-store-4097c.appspot.com",
  messagingSenderId: "623655583937",
  appId: "1:623655583937:web:8b9cbdb802f6bbbcc45440",
  measurementId: "G-DW6BPKF744",
};

//function to take userauth obj from the auth library and store it in db
//async because its an api request which is async...userAuth is what we get back
//userAth is the fat obj we got from google
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //only perform save if you get a userAuth obj
  if (!userAuth) return;

  //if it exists, query inside the firestore to see if it already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); //check whether we have already stored it

  if (!snapShot) {
    // if it doesnt exist, we create it and we use our userRef
    //see what properties you want to store
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(userAuth);
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//configure because there can be many sign ins...ie twitter
firebase.initializeApp(config);

//access to .auth, export anywhere you need anything related to authentication
// set up google authentication utility
export const auth = firebase.auth();

export const firestore = firebase.firestore();

//set up google authentcation utility
//gives us access to the google auth provider class form the auth lib
const provider = new firebase.auth.GoogleAuthProvider();

//takes custom  parameters....we want to trigger the google pop up for auth and sign in
provider.setCustomParameters({ prompt: "select_account" });

//to export out sign in with google that is equal to a function sign in with pop up
//sign in with pop up takes the provider from many types of pop up eg sign in with twitter
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//incase we want the whole library
export default firebase;
