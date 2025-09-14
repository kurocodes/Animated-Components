import AnimatedButtonsDemo from "./demos/AnimatedButtonsDemo";
import AnimatedCardsDemo from "./demos/AnimatedCardsDemo";
import AnimatedNavbarsDemo from "./demos/AnimatedNavbarsDemo";
import ModalsDemo from "./demos/ModalsDemo";
import ToggleSwitchDemo from "./demos/ToggleSwitchDemo";

const App = () => {
  return (
    // <div className="h-screen w-full place-content-center place-items-center" >
    <div className="h-screen w-full place-content-center place-items-center bg-[#fff7f7]">
      {/* <div className="h-screen w-full place-content-center place-items-center bg-[#000]"> */}
      <AnimatedButtonsDemo />
      {/* <AnimatedCardsDemo /> */}
      {/* <AnimatedNavbarsDemo /> */}
      {/* <ToggleSwitchDemo /> */}
      {/* <ModalsDemo /> */}
    </div>
  );
};

export default App;
