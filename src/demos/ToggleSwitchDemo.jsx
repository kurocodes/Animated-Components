import BaseToggle from "../components/ToggleSwtich/BaseToggle";
import BlockSlideToggle from "../components/ToggleSwtich/BlockSlideToggle";
import GlowToggle from "../components/ToggleSwtich/GlowToggle";
import GradientFillToggle from "../components/ToggleSwtich/GradientFillToggle";
import MorphToggle from "../components/ToggleSwtich/MorphToggle";
import RippleToggle from "../components/ToggleSwtich/RippleToggle";

export default function ToggleSwitchDemo() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <BaseToggle />
      <MorphToggle />
      <GradientFillToggle />
      <GlowToggle />
      <RippleToggle />
      <BlockSlideToggle />
    </div>
  );
}
