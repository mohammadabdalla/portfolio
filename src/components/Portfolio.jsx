import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    AWS: "AWS",
    ECOMMERCE: "Ecommerce",
    GAMES:"games",
  };

  const projectsData = [
    {
      title: "Wowly Cloud App",
      projectInfo:
        "Built and deployed an application to the cloud ON s3 for static web hosting and an application load balancer and EC2 servers to host my backend as well as RDS to host my 'mysql' database",
      client: "Firas Odeh",
      technologies: "HTML5, CSS3, Angular, Nodejs/Expressjs, MySql/ORM",
      /* industry: "Art & Design", */
      date: "Feb 16, 2023",
      url: {
        name: "---",
        link: "https://---",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:mohammadabdulla523@gmail.com",
      },
      thumbImage: process.env.PUBLIC_URL+"/images/projects/aws_arch_wowly.drawio.png",
      sliderImages: [
        process.env.PUBLIC_URL+"/images/projects/project-1.jpg",
        process.env.PUBLIC_URL+ "/images/projects/project-5.jpg",
      ],
      categories: [filters.AWS],
    },
    {
      title: "Ecommerce App",
      projectInfo:
        "The ecommerce app i made included the following: Seamless registration, login/logout, and password recovery. Intuitive product catalog with categorization, filtering, and dynamic search capabilities. Feature-rich shopping cart with streamlined item management and a smooth checkout process. Comprehensive user account management, encompassing profiles, order history, and wishlists. Implementation of a robust product reviews and ratings system.",
      client: "Hashem Mahmoud",
      technologies: "React, Node, Express, Mongodb",
      /* industry: "Art & Design" ,*/
      date: "March 2, 2022",
      url: {
        name: "---",
        link: "https://---",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:mohammadabdulla523@gmail.com",
      },
      thumbImage: process.env.PUBLIC_URL+"/images/projects/ecommerce_app.png",
      sliderImages: [
        process.env.PUBLIC_URL+ "/images/projects/project-1.jpg",
        process.env.PUBLIC_URL+ "/images/projects/project-5.jpg",
      ],
      categories: [filters.ECOMMERCE],
    },
    {
      title: "Tic-Tac-Toe",
      projectInfo:
        "A tic-tac-toe app built with reactjs and a move history where you can navigate throwgh it",
      client: "-",
      technologies: "React",
      /* industry: "Art & Design" ,*/
      date: "March 2, 2022",
      url: {
        name: "---",
        link: "https://---",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:mohammadabdulla523@gmail.com",
      },
      thumbImage: process.env.PUBLIC_URL+"/images/projects/Screenshot-2024-02-15-125247.png",
      sliderImages: [
        process.env.PUBLIC_URL+ "/images/projects/Screenshot-2024-02-15-125214.png",
        process.env.PUBLIC_URL+ "/images/projects/Screenshot-2024-02-15-125241.png",
      ],
      categories: [filters.GAMES],
    },
    {
      title: "Gigs",
      projectInfo:
        "A job application built with laravel where you can login or register and a job post or search for a job",
      client: "-",
      technologies: "Laravel/php mysql",
      /* industry: "Art & Design" ,*/
      date: "March 2, 2022",
      url: {
        name: "---",
        link: "https://---",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:mohammadabdulla523@gmail.com",
      },
      thumbImage:process.env.PUBLIC_URL+ "/images/projects/laragigs-1.png",
      sliderImages: [
        process.env.PUBLIC_URL+ "/images/projects/laragigs-2.png",
        process.env.PUBLIC_URL+ "/images/projects/laragigs-3.png",
        process.env.PUBLIC_URL+ "/images/projects/laragigs-4.png",
      ],
      categories: [filters.GAMES],
    },
    {
      title: "Food Delivery Webapp",
      projectInfo:
        "A food delivery app built with reactjs including adming panel where you can manage reastaurant data such as users, menu, etc.. , and a restaurant panel so the owners of the restaurant can manage their own data as well, and a panel for customers who want to order with a checkout process.",
      client: "-",
      technologies: "React",
      /* industry: "Art & Design" ,*/
      date: "Feb 2, 2024",
      url: {
        name: "---",
        link: "https://---",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:mohammadabdulla523@gmail.com",
      },
      thumbImage: process.env.PUBLIC_URL+"/images/projects/food-order-1.png",
      sliderImages: [
        process.env.PUBLIC_URL+"/images/projects/food-order-2.png",
        process.env.PUBLIC_URL+ "/images/projects/food-order-3.png",
      ],
      categories: [filters.ECOMMERCE],
    }
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt="PROJECT"
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
