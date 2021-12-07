import React, { useEffect, useState } from "react";
import "./styles.css";


const portfolio = [
  {
    name: "My best client",
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "My favorite case",
    category: ["all", "mobile", "ux-ui"]
  },
  {
    name: "A old job",
    category: ["all", "frontend"]
  },
  {
    name: "It is a really cool website",
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "Something more",
    category: ["all", "others"]
  }
];

function MyProject() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="portfolio__labels">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </a>
        <a
          href="/#"
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </a>
        <a
          href="/#"
          active={filter === "mobile"}
          onClick={() => setFilter("mobile")}
        >
          Mobile
        </a>
        <a
          href="/#"
          active={filter === "ux-ui"}
          onClick={() => setFilter("ux-ui")}
        >
          UX/UI
        </a>
        <a
          href="/#"
          active={filter === "others"}
          onClick={() => setFilter("others")}
        >
          Others
        </a>
      </div>
      <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
        )}
      </div>
    </>
  );
}

export default MyProject;
