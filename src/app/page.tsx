import Container from "@/components/Container";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container className="py-5">
        <Banner />
      </Container>
    </main>
  );
}
