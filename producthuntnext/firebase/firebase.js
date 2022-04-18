import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore();
  }

  async signUp(name, email, password) {
    const newUser = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return await updateProfile(newUser.user, { displayName: name });
  }
  async signIn(email, passsword) {
    return signInWithEmailAndPassword(this.auth, email, passsword);
  }

  //Log Out
  async logOut() {
    await signOut(this.auth);
  }

  async addProduct(product) {
    const newProduct = await addDoc(collection(this.db, "products"), product);
    console.log(newProduct);
  }
}

const firebase = new Firebase();
export default firebase;
