import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Header = async () => {
  return (
    <header className=" sticky top-0 z-50 bg-white">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
