import Container from "@/src/components/Container";
import Title from "@/src/components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shofy | Login page",
};

const LoginPage = async () => {
  return (
    <Container className="py-5 min-h-screen">
      <Title>Login page</Title>
    </Container>
  );
};

export default LoginPage;
