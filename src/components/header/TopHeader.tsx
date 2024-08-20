import { CiDeliveryTruck } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import Container from "../Container";
import { ThemeToggler } from "../theme/ThemeToggler";
const TopHeader = () => {
  return (
    <div className="bg-white dark:bg-bodyColor text-black dark:text-gray-200 w-full py-1 border-b-[1px] border-b-bodyColor10 dark:border-b-slate-400">
      <Container className="flex items-center justify-between">
        <p className="w-full md:w-auto text-xs md:text-sm flex items-center font-medium py-1">
          <CiDeliveryTruck className="text-[#ffb342] text-2xl mr-1" /> FREE
          Express Shipping On Orders $570+
        </p>
        <div className="flex items-center text-sm">
          <p className="headerTopMenu">
            English <IoChevronDownSharp />{" "}
          </p>
          <p className="headerTopMenu">
            USD <IoChevronDownSharp />{" "}
          </p>
          <p className="headerTopMenu">
            Setting <IoChevronDownSharp />{" "}
          </p>
          <ThemeToggler />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
