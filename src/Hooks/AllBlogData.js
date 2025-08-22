import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Taking Initiative - Creating a Website",
      commentor: "Thomas Martin ",
      date: "August 20th, 2025",
      tag: `Web Development, Coding, Business`,
      description1:
        "When I decided to create my own website, I wasn’t chasing perfection. I wanted a clean place I owned—somewhere to publish work without asking an algorithm for permission. The hardest part wasn’t picking a stack; it was deciding to start and accepting that version one wouldn’t be the final word.",
      description2:
        "Most developers struggle to see what’s interesting in the work they do every day. A small launch somewhere new is often exactly what the project needs, because shipping outside your comfort zone reliably pushes you to new creative heights. ",
      description3:
        "I kept the first build deliberately small: a home page that explains who I help and how, a projects page that focuses on outcomes, and a simple contact path that respects people’s time. Keeping the surface area tight let me obsess over the essentials—fast loads, readable typography, and honest copy—rather than chasing every shiny component.",
      description4:
        "Under the hood, I chose tools I’ll actually maintain. Static pages for speed and reliability, a lightweight way to write posts, and a tiny serverless endpoint for forms. Accessibility wasn’t an afterthought; semantic HTML, clear focus states, and good contrast shipped in the first commit. The goal was a site that feels effortless to use, on any device, at any speed. \nWhat mattered most, though, was momentum. Each small improvement—an optimized image here, a clearer headline there—made the whole thing feel more like me. That’s the quiet payoff of taking initiative: you learn in public, adjust quickly, and the result is something you’re proud to point at when someone asks what you’ve been building.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
