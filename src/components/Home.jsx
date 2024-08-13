import firebase from "../firebase";
import { useContext } from 'react';
import AuthContext from './AuthContext';

const signUp = (email, password) => {

  const { currentUser, loading } = useContext(AuthContext);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle successful sign-up
    })
    .catch((error) => {
      // Handle errors
    });
};

const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle successful sign-in
    })
    .catch((error) => {
      // Handle errors
    });
};

const signOut = () => {
  firebase.auth().signOut()
    .then(() => {
      // Handle successful sign-out
    })
    .catch((error) => {
      // Handle errors
    });
};

export { signUp, signIn, signOut };
