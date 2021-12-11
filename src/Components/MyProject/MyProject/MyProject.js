import React, { useEffect, useState } from "react";
import "./Myproject.css";
const portfolio = [
  {
    id: 1,
    img: "https://i.ibb.co/zPV19kc/aments-Project.png",
    name: "❖ Aments - Best Car Accessories Shop",
    date: "Nov 2021 - Nov 2021",
    website: "https://aments-9b6e4.web.app/",
    frontendGit: "https://github.com/hellorafiul/Aments-Car-Accessories-Client",
    backendGit: "https://github.com/hellorafiul/Aments-Car-Accessories-server",
    linkedin: "https://www.linkedin.com/in/hellorafiul/",
    des: [
      "➣ A responsive, fully-functional niche website",
      "➣ Allowing customers to create an account, browse products, buy products & write reviews.",
      "➣ Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.",
      "➣ Reviews are dynamic.",
    ],
    category: ["all", "frontend", "ux-ui"],
    Technology: [
      "#MUI",
      "#JS",
      "#React",
      "#Aso",
      "#React router",
      "#Heroku",
      "#Firebase",
      "#Node JS",
      "#Node Express",
      "#MongoDB",
    ],
  },
  {
    id: 2,
    img: "https://i.ibb.co/XJPf5xP/yatra.png",
    name: "❖ Yatra - Best Travel Agency",
    date: "Nov 2021 - Nov 2021",
    website: "https://yatra-62295.web.app/",
    frontendGit: "https://github.com/hellorafiul/Yatra-Travel-Agency-Client",
    backendGit: "https://github.com/hellorafiul/Yatra-Travel-Agency-Server",
    linkedin: "https://www.linkedin.com/in/hellorafiul/",
    des: [
      "➣ Travel agency website with dynamic functions and responsive design.",
      "➣ Allows user to create an account, book packages, add custom packages, and delete them.",
      "➣ Google firebase authentication has been added.",
      "➣ Reviews are dynamic.",
    ],
    category: ["all", "frontend"],
    Technology: [
      "#BootStrap",
      "#JS",
      "#React",
      "#React router",
      "#Heroku",
      "#Firebase",
      "#Node JS",
      "#Node Express",
      "#MongoDB",
    ],
  },
  {
    id: 3,
    img: "https://i.ibb.co/DffF163/honulare.png",
    name: "❖ HounLare - Medical & Health Care Services",
    date: "Oct 2021 - Oct 2021",
    website: "https://hounlare.web.app/",
    frontendGit: "https://github.com/hellorafiul/HounLare",
    linkedin: "https://www.linkedin.com/in/hellorafiul/",
    des: [
      "➣ A fully functional dynamic responsive website",
      "➣ User can see his name and profile picture in the header after signin with Google.",
      "➣ Navigate different pages is possible through navbar without reloading.",
    ],
    category: ["all", "frontend", "ux-ui"],
    Technology: [
      "#Html5",
      "#Css3",
      "#BootStrap",
      "#JS",
      "#React",
      "#React router",
      "#Firebase",
    ],
  },
  {
    id: 4,
    img: "https://i.ibb.co/3mbq7xd/hondaCBR.png",
    name: "❖ Honda CBR - Best Bike Accessories Shop",
    date: "July 2021 - July 2021",
    website: "https://honda-cbr-rafi.netlify.app/",
    frontendGit: "https://github.com/hellorafiul/honda-cbr",
    linkedin: "https://www.linkedin.com/in/hellorafiul/",
    des: [
      "➣  This was my very first static responsive website focused on UI using HTML5, CSS3, Bootstrap and JavaScript",
      "➣ Used fancy carousel & hosted on netlify",
      "➣ Amzging UI exprience",
    ],
    category: ["all", "others"],
    Technology: ["#HTML5", "#CSS3", "#BootStrap", "#JavaScript"],
  },
];

function MyProject() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <h3 className="fs-1 mb-2">My Project_</h3>
      <div className="project-filter" id="projects">
        <div
          className="portfolio__labels btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            class="btn btn-outline-primary px-3 py-3"
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            class="btn btn-outline-primary px-5 py-3"
            active={filter === "frontend"}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            type="button"
            class="btn btn-outline-primary px-5 py-3"
            active={filter === "mobile"}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </button>
          <button
            type="button"
            class="btn btn-outline-primary px-5 py-3"
            active={filter === "ux-ui"}
            onClick={() => setFilter("ux-ui")}
          >
            UX/UI
          </button>
          <button
            type="button"
            class="btn btn-outline-primary px-5 py-3"
            active={filter === "others"}
            onClick={() => setFilter("others")}
          >
            Others
          </button>
        </div>
        <div className="">
          <div class="row row-cols-1 row-cols-md-3 g-2">
            {projects.map((item) =>
              item.filtered === true ? (
                <div class="col mx-auto">
                  <div class="project-grid h-100 shadow rounded-3 my-3">
                    <img
                      src={item.img}
                      alt=""
                      className="img-fluid py-3"
                      data-aos="zoom-in"
                      data-aos-duration="500"
                    />

                    <div
                      className="project-details p-2"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <h3 className="project-card__title mt-md-0 mt-sm-5">
                        {item.name}
                      </h3>
                      <p className="text-start mx-3">{item.date}</p>
                      <ul className="my-item">
                        {item.des.map((item) => (
                          <li className="text-start">{item}</li>
                        ))}
                      </ul>
                      <ul className="tags">
                        {item.Technology.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                      <div className="project-link">
                        <a href={item?.website} target="_blank">
                          <i class="fas fa-eye"></i> Live Code
                        </a>
                        <a href={item?.frontendGit} target="_blank">
                          <i className="fas fa-code-branch"></i> Client Side
                        </a>
                        {item?.backendGit && (
                          <a href={item?.backendGit} target="_blank">
                            <i className="fa fa-github"></i> Server Side
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProject;
