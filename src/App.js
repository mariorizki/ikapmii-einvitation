import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Invitation from './pages/Invitation';
import Vote from './pages/Vote';
import SubmitVote from './pages/SubmitVote';
import Result from './pages/Result';

function App() {
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, 'users');

  // const fetchUsers = async () => {
  //   await getDocs(collection(db, "users")).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setUsers(newData);
  //   });
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // console.log(users);

  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/invitation/:id" element={<Invitation />} />
      <Route path="/vote/:id" element={<Vote />} />
      <Route path="/submitvote" element={<SubmitVote />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
