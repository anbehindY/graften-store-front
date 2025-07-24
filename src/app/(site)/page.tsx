import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graften | DRUKARNIA INTERNETOWA",
  description: "This is Home for Graften",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
