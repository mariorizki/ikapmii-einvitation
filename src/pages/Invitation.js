import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const Invitation = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const usersCollectionRef = collection(db, "users");
  const fetchUsers = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
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
      <div className="text-[#FFC93C] bg-slate-900 h-[100vh] p-10 text-center flex justify-center gap-5 items-center flex-col">
        {loading ? (
          <>
            <RingLoader size={150} color="#FFC93C" />
            <p className=" text-2xl opacity-50 mt-4">Loading...</p>
          </>
        ) : (
          <>
            <p className="uppercase tracking-widest">Join Us To</p>

            <h1 className="text-2xl font-bold">
              Reuni Akbar <br /> IKA-PMII Komfapsi
            </h1>
            <hr className="bg-[#FFC93C] w-24 -mt-1 mx-auto h-0.5 rounded border-0" />
            <p className="uppercase tracking-wider text-sm">
              tetaplah menginspirasi, jangan berhenti berkarya
            </p>
            <p className="italic">"Recall Reconnect Reinforce"</p>
            <p className="tracking-wider">24 Desember 2022</p>
            <h1 className="text-xl mt-4">Kepada Sahabat {name}</h1>
            <button className=" text-sm font-medium py-1 px-3 border-[1px]  border-[#FFC93C]  mt-8 rounded-sm">
              Buka Undangan
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Invitation;
