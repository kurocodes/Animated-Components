import ActiveIndicatorNavbar from "../components/Navbar/ActiveIndicatorNavbar";
import BgHighlightNavbar from "../components/Navbar/BgHighlightNavbar";
import MagneticNavbar from "../components/Navbar/MagneticNavbar";
import ScrollRevealNavbar from "../components/Navbar/ScrollRevealNavbar";
import StaggeredNavbar from "../components/Navbar/StaggeredNavbar";
import UnderlineNavbar from "../components/Navbar/UnderlineNvabar";

export default function AnimatedNavbarsDemo() {
  return (
    <div className='flex justify-center items-center w-full'>
      {/* <UnderlineNavbar /> */}
      {/* <BgHighlightNavbar /> */}
      {/* <ActiveIndicatorNavbar /> */}
      {/* <ScrollRevealNavbar /> */}
      {/* <StaggeredNavbar /> */}
      <MagneticNavbar />
    </div>
  )
}
