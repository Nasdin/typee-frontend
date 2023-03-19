import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth;

const checkAuthentication = async () => {
  return new Promise((resolve, reject) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .getIdToken()
          .then((idToken) => {
            resolve({ isAuthenticated: true, idToken });
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve({ isAuthenticated: false });
      }
    });
  });
};

export { checkAuthentication };