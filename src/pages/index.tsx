import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/component/common/container";
import Todo from "@/component/todo/todo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Container>
        <Todo />
      </Container>
    </>
  );
}
