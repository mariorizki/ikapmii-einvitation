import { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp,
  doc,
  getDoc,
} from 'firebase/firestore';
import { Route, Routes, useParams } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
import Welcome from '../components/Welcome';
import Header from '../components/Header';
import Details from '../components/Details';
import Comments from '../components/Comments';
import Footer from '../components/Footer';
import Vote from './Vote';
import SubmitVote from './SubmitVote';

const Invitation = () => {
  // const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const [user, setUser] = useState({});
  const id = useParams();
  // console.log(id.id);
  const docRef = doc(db, 'users', id.id);

  const fetchUserById = async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setLoading(false);
      setUser({ ...docSnap.data(), id: docSnap.id });
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  //////////////////////////

  //   const usersCollectionRef = collection(db, "users");
  // const fetchUsers = async () => {
  //   await getDocs(collection(db, 'users')).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setUsers(newData);
  //     setLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const userId = useParams();
  // const filteredUser = users.filter((user) => user.id === userId.id);
  const name = user?.name;
  const gender = user?.gender;
  const attendance = user?.attendance;

  // console.log(user);

  const handleAddComment = async (e) => {
    e.preventDefault(e);
    if (commentInput !== '') {
      await addDoc(collection(db, 'comments'), {
        comment: commentInput,
        owner: name,
        timestamp: serverTimestamp(),
      });
      setCommentInput('');
    } else {
      alert('Teks tidak boleh kosong');
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), id: doc.id });
      });
      setComments(dataArr);
    });
    return () => unsubscribe();
  }, []);

  // console.log(comments);

  return (
    <>
      <div className="bg-[#060E31] text-center flex justify-center gap-5 items-center flex-col text-white">
        {loading ? (
          <div className="h-[100vh] flex justify-center items-center flex-col">
            <RingLoader size={150} color="#FFC93C" />
            <p className="text-[#FFC93C] text-2xl opacity-50 mt-4">
              Loading...
            </p>
          </div>
        ) : (
          <>
            <Welcome
              name={name}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              gender={gender}
            />
            <Header
              name={name}
              gender={gender}
              attendance={attendance}
              userId={userId}
            />
            <Details />
            <Comments
              comments={comments}
              commentInput={commentInput}
              setCommentInput={setCommentInput}
              handleAddComment={handleAddComment}
            />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Invitation;
