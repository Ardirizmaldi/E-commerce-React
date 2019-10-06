import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("fZ6m6yMCj3nlEYpz1Pcd")
  .collection("cartItems")
  .doc("8zVRSvWQRt9j3OZWsM7A");

firestore.doc("/users/fZ6m6yMCj3nlEYpz1Pcd/cartItems/8zVRSvWQRt9j3OZWsM7A");
firestore.collection("/users/fZ6m6yMCj3nlEYpz1Pcd/cartItems");
