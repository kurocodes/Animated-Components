import AnimatedButtonsDemo from "./demos/AnimatedButtonsDemo";
import AnimatedCardsDemo from "./demos/AnimatedCardsDemo";
import AnimatedNavbarsDemo from "./demos/AnimatedNavbarsDemo";
import ModalsDemo from "./demos/ModalsDemo";
import ToggleSwitchDemo from "./demos/ToggleSwitchDemo";
import { useTheme } from "./context/ThemeContext";
import { icons } from "./assets/assets";
import ButtonsDemo from "./demos/ButtonsDemo";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`relative flex flex-col gap-4 items-center justify-center h-screen bg-[#fff7f7] dark:bg-[#000]`}
    >
      {/* <AnimatedButtonsDemo /> */}
      {/* <AnimatedCardsDemo /> */}
      {/* <AnimatedNavbarsDemo /> */}
      {/* <ToggleSwitchDemo /> */}
      {/* <ModalsDemo /> */}
      <ButtonsDemo />

      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full cursor-pointer"
      >
        <img
          src={theme === "light" ? icons.moon : icons.sun}
          alt="Change theme"
        />
      </button>
    </div>
  );
};

export default App;
