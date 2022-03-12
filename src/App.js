import "./App.css";
import StudentCardItem from "./components/shared/StudentCardItem";
import StudentCardItemSkeleton from "./components/shared/StudentCardItemSkeleton";
import { User } from "./services/api"
import { useEffect, useState } from "react";

const App = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(username);
  }, [username]);

  const getUsers = (username) => {
    User.getUsers(username)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setIsLoadingUsers(false);
      })
      .catch((err) => {
        console.log(err)
        setIsLoadingUsers(false);
      });
  }

  // const getUsers = (username) => {
  //   User.getUsers(username)
  //     .then((res) => {
  //       console.log(res.data);
  //       setUsers(res.data);
  //       setIsLoadingUsers(false);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setIsLoadingUsers(false);
  //     });
  // }

  return (
    <>
      <section className="flex flex-row w-full">
        <div className="w-1/2 bg-pink-500 text-white text-3xl font-semibold p-10">
          ZULFAH
        </div>
        <div className="w-1/2 bg-pink-800 text-white text-3xl font-semibold p-10">
          TRAINING
        </div>
      </section>

      {isLoadingUsers ? (
        // <div className="flex flex-col justify-center items-center h-80">
        //   <div>
        //     <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        //       <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        //       <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        //     </svg>
        //   </div>
        //   <div className="mt-4">LOADING...</div>
        // </div>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
          {[...Array(5)].map((i) => (
            <StudentCardItemSkeleton/>
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
          {users.map((user) => (
            <StudentCardItem
              key={user.id}
              name={user.name}
              role={user.username}
            />
          ))}
        </section>
      )}

      <h1 className="text-4xl">{username}</h1>
      <input className="border border-blue-500 p-5" type="text" onInput={(e) => setUsername(e.target.value)}/>
    </>
  );
};

export default App;
