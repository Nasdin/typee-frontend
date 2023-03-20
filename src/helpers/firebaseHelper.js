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

const getIdToken = async () => {
  const user = auth().currentUser;
  if (user) {
    const token = await user.getIdToken();
    return token;
  } else {
    return null;
  }
};

export const authenticateUser = async () => {
  try {
    const { isAuthenticated, idToken } = await checkAuthentication();
    if (isAuthenticated) {
      localStorage.setItem('token', idToken);
    } else {
      localStorage.removeItem('token');
    }
    return isAuthenticated;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};


export { checkAuthentication, getIdToken, authenticateUser };

