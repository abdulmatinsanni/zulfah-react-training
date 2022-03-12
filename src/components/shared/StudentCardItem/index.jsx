import { useContext, useEffect } from "react";
import { TimePeriodContext } from "../../../App";
import DefaultAvatar from "../../../assets/images/default-avatar.png";

const StudentCardItem = ({
  name = "Abdulmatin Sanni",
  role = "Senior DevOps Engineer",
  picture = DefaultAvatar,
}) => {
  const timePeriodValues = useContext(TimePeriodContext);

  return (
    <div className="flex flex-row items-center space-x-4 p-5 border border-blue-200 shadow-md rounded-lg hover:bg-rosh-100 transition ease-in duration-300">
      <img className="w-20 rounded-full" src={picture} alt="user" />
      <div className="flex flex-col">
        <h2 className="text-2xl font-medium">{name}</h2>
        <span className="text-gray-700">{role}</span>
      </div>
      {timePeriodValues.isDark ? "Goodnight" : "Good morning!"}
    </div>
  );
};

export default StudentCardItem;
