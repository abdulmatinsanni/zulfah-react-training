import { useContext } from "react";
import { TimePeriodContext } from "../../../App";

const Container = ({ children }) => {

  const timePeriodValues = useContext(TimePeriodContext);
  
  return(
    <div className={`${timePeriodValues.isDark ? "bg-gray-200" : "bg-white"}`}>
      <section className="flex flex-row w-full">
        <div className="w-1/2 bg-pink-500 text-white text-3xl font-semibold p-10">
          ZULFAH
        </div>
        <div className="w-1/2 bg-pink-800 text-white text-3xl font-semibold p-10">
          TRAINING
        </div>
      </section>

      <div>
        <button onClick={() => timePeriodValues.toggleTheme()}>Toggle Theme</button>
      </div>

      {children}

      <div className="px-20 py-10 bg-gray-100 text-center text-gray-500">
        &copy; Zulfah 2022
      </div>
    </div>
  )
};

export default Container;