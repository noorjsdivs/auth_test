import React from "react";
import Container from "../Container";
import Link from "next/link";

const BottomHeader = async () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Categories", href: "/categories" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <div className="border-b-[1px] border-b-gray-400 py-1">
      <Container className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-4 font-medium">
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="hover:text-themeColor duration-200"
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <p className="text-xs hidden md:inline-flex font-medium text-gray-500">
          Hotline: <span className="text-black">+88 01023456789</span>
        </p>
      </Container>
    </div>
  );
};

export default BottomHeader;
