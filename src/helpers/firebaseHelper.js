import firebase from "firebase/app";
import "firebase/auth";

export async function getIdToken() {
  const user = firebase.auth().currentUser;
  if (user) {
    const token = await user.getIdToken();
    return token;
  } else {
    return null;
  }
}
