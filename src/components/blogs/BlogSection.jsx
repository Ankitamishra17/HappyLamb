import { useState } from "react";
import Blogfilter from "./Blogfilter";
import BlogGrid, { POSTS } from "./BlogGrid";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const [active, setActive] = useState("All");

  const count = active === "All" ? POSTS.length : POSTS.filter((p) => p.category === active).length;

  return (
    <div className="bg-[#0e0d0c]">
      <Blogfilter active={active} onChange={setActive} count={count} />
      <BlogGrid active={active} />
    </div>
  );
}