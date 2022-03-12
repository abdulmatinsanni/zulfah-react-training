import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import UserDetailsPage from "./components/pages/UserDetailsPage";

export const TimePeriodContext = createContext({});

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColourTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <TimePeriodContext.Provider value={{
      isDayLightSavingsOn: false,
      isDark: isDarkMode,
      toggleTheme: toggleColourTheme
    }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details/:id" element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </TimePeriodContext.Provider>
  );
};

export default App;
