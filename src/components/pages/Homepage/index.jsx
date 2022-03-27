import StudentCardItem from "../../../components/shared/StudentCardItem";
import StudentCardItemSkeleton from "../../../components/shared/StudentCardItemSkeleton";
import { User } from "../../../services/api";
import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUsersRequest } from "../../../state/slices/userSlice";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const users = useSelector((state) => state.data);
  const isLoadingUsers = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(username);
  }, [username]);

  const getUsers = (username) => {
    dispatch(getUsersRequest());
  };

  const handleCreateUserBtn = () => {
    dispatch(
      createUser({
        name: "Abdulmatin Sanni",
        class: "SSS3",
      })
    );
  };

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

      <button
        onClick={handleCreateUserBtn}
        className="bg-blue-500 p-5 text-white"
      >
        Create User
      </button>

      {isLoadingUsers ? (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
          {[...Array(5)].map((n, i) => (
            <StudentCardItemSkeleton key={i} />
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
          {users.map((user) => (
            <Link key={user.id} to={`/details/${user.id}`}>
              <StudentCardItem name={user.name} role={user.username} />
            </Link>
          ))}
        </section>
      )}
    </Container>
  );
};

export default HomePage;
