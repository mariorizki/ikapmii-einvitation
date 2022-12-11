import { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import RingLoader from 'react-spinners/RingLoader';
import Welcome from '../components/Welcome';
import Header from '../components/Header';

const Invitation = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  //   const usersCollectionRef = collection(db, "users");
  const fetchUsers = async () => {
    await getDocs(collection(db, 'users')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
      setLoading(false);
    });
  };

  const userId = useParams();
  const filteredUser = users.filter((user) => user.id === userId.id);
  const name = filteredUser[0]?.name;
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="bg-slate-900 h-[100vh]  text-center flex justify-center gap-5 items-center flex-col">
        {loading ? (
          <>
            <RingLoader size={150} color="#FFC93C" />
            <p className="text-[#FFC93C] text-2xl opacity-50 mt-4">
              Loading...
            </p>
          </>
        ) : (
          <>
            <Welcome name={name} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Header name={name} />
          </>
        )}
      </div>
    </>
  );
};

export default Invitation;
