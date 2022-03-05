import "./App.css";
import StudentCardItem from "./components/shared/StudentCardItem";
import AbdulmatinProfileImage from "./assets/images/profile-image.jpeg";

const App = () => {
  const students = [
    {
      name: "Abdulmatin Sanni",
      role: "Senior DevOps Engineer",
      picture: AbdulmatinProfileImage,
    },
    {
      name: "Ajao Rosh",
      role: "Chief Executive Officer",
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGYhEvjKC6OIw/profile-displayphoto-shrink_100_100/0/1633775541472?e=1651708800&v=beta&t=UhTrOZN2QYr88W7lT2DxPSEYMjjF31m7EpPpRQWOtjs",
    },
    {
      name: "Ali Olarinde",
      role: "Chief Technology Officer",
    },
    {
      name: "Jeff Besoz",
      role: "Amaxon CEO",
    },
  ];

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

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
        {students.map((student) => (
          <StudentCardItem
            key={student.name}
            name={student.name}
            role={student.role}
            picture={student.picture}
          />
        ))}
      </section>
    </>
  );
};

export default App;
