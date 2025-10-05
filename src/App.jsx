import { useState } from "react";
import AnimatedButtonsDemo from "./demos/AnimatedButtonsDemo";
import AnimatedCardsDemo from "./demos/AnimatedCardsDemo";
import AnimatedNavbarsDemo from "./demos/AnimatedNavbarsDemo";
import ModalsDemo from "./demos/ModalsDemo";
import ToggleSwitchDemo from "./demos/ToggleSwitchDemo";
import { useTheme } from "./context/ThemeContext";
import { icons } from "./assets/assets";

const App = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  // const themeStyle = theme === "light" ? "bg-[#fff7f7]" : "bg-[#000]";

  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center h-screen bg-[#fff7f7] dark:bg-[#000]`}
    >
      {/* <AnimatedButtonsDemo /> */}
      {/* <AnimatedCardsDemo /> */}
      {/* <AnimatedNavbarsDemo /> */}
      {/* <ToggleSwitchDemo /> */}
      <ModalsDemo />

      <button onClick={toggleTheme} className="cursor-pointer bg-white">
        <img
          src={theme === "light" ? icons.moon : icons.sun}
          alt="Change theme"
        />
      </button>
    </div>
  );
};

export default App;
