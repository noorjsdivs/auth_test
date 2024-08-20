"use client";
import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="hidden md:inline-flex flex-1 relative">
      <input
        type="text"
        placeholder="Search products here..."
        className="w-full border-2 border-gray-600 focus-visible:border-themeColor outline-none h-10 pl-4 pr-20 bg-transparent"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <IoClose
          onClick={() => setSearchValue("")}
          className="absolute text-xl top-2.5 right-12 text-gray-600 hover:text-red-500 duration-200 cursor-pointer"
        />
      )}
      <span className="bg-themeColor text-white inline-flex w-10 h-10 items-center justify-center text-xl absolute top-0 right-0 border-gray-600">
        <IoSearch />
      </span>
    </div>
  );
};

export default SearchInput;
