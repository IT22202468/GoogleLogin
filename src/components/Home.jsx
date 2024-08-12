import { useEffect } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../config/firebaseConfig"; // Adjust the path if needed

const Home = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User Info:", user);
        // Handle user session or store user info as needed
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User Info:", user);
        // Handle authenticated user
      } else {
        console.log("User is signed out");
        // Handle unauthenticated state
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Home;
