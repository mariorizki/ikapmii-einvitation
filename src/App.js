import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const fetchUsers = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(users);
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/invitation/:id" element={<Invitation users={users} />} />
    </Routes>
  );
}

export default App;
