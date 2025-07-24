import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signin Page | Graften",
  description: "This is Signin Page for Graften",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
