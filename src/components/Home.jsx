import firebase from "../firebase";
// import { useContext } from 'react';
// import AuthContext from './AuthContext';


const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle successful sign-up
      console.log('User signed up successfully', userCredential.user);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error during sign-up:', error.message);
      alert(`Sign-up failed: ${error.message}`);
    });
};

const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle successful sign-in
      console.log('User signed in successfully', userCredential.user);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error during sign-in:', error.message);
      alert(`Sign-in failed: ${error.message}`);
    });
};

const signOut = () => {
  firebase.auth().signOut()
    .then(() => {
      // Handle successful sign-out
      console.log('User signed out successfully');
    })
    .catch((error) => {
      // Handle errors
      console.error('Error during sign-out:', error.message);
      alert(`Sign-out failed: ${error.message}`);
    });
};

export { signUp, signIn, signOut };
