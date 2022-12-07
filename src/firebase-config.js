import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDo9pb9DlfYfi4m0_oIXzBlhG8Or6zSLVU",
  authDomain: "react-todo-app-3df37.firebaseapp.com",
  projectId: "react-todo-app-3df37",
  storageBucket: "react-todo-app-3df37.appspot.com",
  messagingSenderId: "824322463960",
  appId: "1:824322463960:web:a85b84c19ce2c06f0e5fad",
  measurementId: "G-VDGG14QHWK",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
