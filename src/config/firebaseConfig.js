import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAn0Gob1W_ECGC5i-nPf5fQ2qdKWvxVfd4",
  authDomain: "your-auth-domain",
  projectId: "fieldexpert-720d5",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "987440646287",
  appId: "1:987440646287:web:d6c32a760b405bfc6f08fa",
  measurementId: "your-measurement-id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, analytics };
