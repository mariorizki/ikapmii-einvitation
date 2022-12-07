import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Invitation = () => {
  const [users, setUsers] = useState([]);
  //   const usersCollectionRef = collection(db, "users");
  const fetchUsers = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
    });
  };

  const userId = useParams();
  const filteredUser = users.filter((user) => user.id === userId.id);
  const name = filteredUser[0]?.name;
  console.log(name);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-black h-[100vh] p-10 text-center">
      <h1 className="text-[#FFC93C] text-5xl">Reuni Akbar IKA-PMII Komfapsi</h1>
      <h1 className="text-[#FFC93C] text-5xl">Hi {name}</h1>
    </div>
  );
};

export default Invitation;
