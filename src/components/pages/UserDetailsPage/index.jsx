import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../shared/Container";
import { User } from "../../../services/api"

const UserDetailsPage = () => {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserById(params.id);
  }, [params.id])

  const getUserById = (id) => {
    User.getUserById(id)
      .then((res) => {
        console.log(res.data[0]);
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.log(err)
      })
  } 

  return (
    <Container>
      <section className="p-20 pb-0 text-4xl font-semibold">
      {user.name} Details
      </section>

      <section className="grid grid-cols-1 gap-10 p-20 pt-10">
        <div className="p-10 bg-gray-200 text-gray-900">
          Name: {user.name}
        </div>

        <div className="p-10 bg-gray-200 text-gray-900">
          Username: {user.username}
        </div>

        <div className="p-10 bg-gray-200 text-gray-900">
          Email: {user.email}
        </div>
      </section>
    </Container>
  );
};

export default UserDetailsPage;
