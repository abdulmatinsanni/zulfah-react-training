import StudentCardItem from "../../../components/shared/StudentCardItem";
import StudentCardItemSkeleton from "../../../components/shared/StudentCardItemSkeleton";
import { User } from "../../../services/api"
import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(username);
  }, [username]);

  const getUsers = (username) => {
    setIsLoadingUsers(true);

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
    <Container>
      <section className="p-20 pb-0">
        <input
          className="w-full border border-gray-400 focus:border-pink-500 p-5 rounded-xl focus:outline-none"
          type="text"
          onInput={(e) => setUsername(e.target.value)}
          placeholder="Search by username"
        />
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
          {[...Array(5)].map((n, i) => (
            <StudentCardItemSkeleton key={i}/>
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
          {users.map((user) => (
            <Link key={user.id} to={`/details/${user.id}`}>
              <StudentCardItem
                name={user.name}
                role={user.username}
              />
            </Link>
          ))}
      </section>
      )}
    </Container>
  );
};

export default HomePage;
