import BlogDetails from "@/components/BlogDetails";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | Graften",
  description: "This is Blog Details Page for Graften",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <main>
      <BlogDetails />
    </main>
  );
};

export default BlogDetailsPage;
