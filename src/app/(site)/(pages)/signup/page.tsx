import Signup from "@/components/Auth/Signup";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signup Page | Graften",
  description: "This is Signup Page for Graften",
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
