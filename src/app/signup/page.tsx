import Container from "@/components/Container";
import Title from "@/src/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shofy | Sign up page",
};

const SignUpPage = () => {
  return (
    <Container className="py-5 min-h-screen">
      <Title>Signup page</Title>
    </Container>
  );
};

export default SignUpPage;
