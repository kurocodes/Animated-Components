import { useState } from "react";
import AnimatedButtonsDemo from "./demos/AnimatedButtonsDemo";
import AnimatedCardsDemo from "./demos/AnimatedCardsDemo";
import AnimatedNavbarsDemo from "./demos/AnimatedNavbarsDemo";
import ModalsDemo from "./demos/ModalsDemo";
import ToggleSwitchDemo from "./demos/ToggleSwitchDemo";

const App = () => {

  const [theme, setTheme] = useState("light");
  
    const themeStyle = theme === "light" ? "bg-[#fff7f7]" : "bg-[#000]";

  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center h-screen ${themeStyle}`}
    >
      {/* <AnimatedButtonsDemo /> */}
      {/* <AnimatedCardsDemo /> */}
      {/* <AnimatedNavbarsDemo /> */}
      {/* <ToggleSwitchDemo /> */}
      <ModalsDemo />
    </div>
  );
};

export default App;
