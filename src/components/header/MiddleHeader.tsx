// "use client";
import { logo, userImage } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import Container from "../Container";
import SearchInput from "../SearchInput";

const MiddleHeader = async () => {
  return (
    <div className="border-b-[1px] border-b-gray-400">
      <Container className="py-5 flex items-center justify-between gap-4 md:gap-6 lg:gap-20">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28" />
        </Link>

        <SearchInput />

        <div className="hidden md:inline-flex items-center gap-3">
          <Link href={"/login"} className="flex items-center gap-2">
            {/* icon */}
            <div className="border-2 border-gray-600 p-2 text-xl rounded-full">
              <FaRegUser />
            </div>
            {/* text */}
            <div>
              <p className="text-xs">Hello, Guest</p>
              <p className="text-sm font-semibold">Login / Register</p>
            </div>
          </Link>

          {/* Favorite Icon */}
          <Link href={"/favorite"} className="relative">
            <MdFavoriteBorder className="text-2xl text-gray-600" />
            <span className="absolute -right-1 -top-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
              0
            </span>
          </Link>
          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <HiOutlineShoppingBag className="text-2xl text-gray-600" />
            <span className="absolute -right-1 -top-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
        <div className="text-xl border border-themeColor p-2 text-black flex md:hidden items-center justify-center">
          <RiMenu3Line />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
