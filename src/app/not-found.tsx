import { notFoundImage } from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container className="flex flex-col gap-2 items-center justify-center py-10">
      <Image src={notFoundImage} alt="notFoundImage" className="w-60" />
      <p className="text-2xl font-semibold">Oops! Page not found</p>
      <p className="text-sm text-gray-500 max-w-80 text-center">
        Whoops, this is embarrassing. Looks like the page you were looking for
        wasn't found.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
      >
        Back to Home
      </Link>
    </Container>
  );
};

export default NotFoundPage;
