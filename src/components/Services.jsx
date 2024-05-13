import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
   /*  {
      name: "Graphic Design",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-palette",
    },
    {
      name: "Web Design",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "App Design & Develop",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Business Analysis",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-chart-area",
    },
    {
      name: "SEO Marketing",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: "fas fa-bullhorn",
    }, */
    {
      name: "Cloud Archetecting on AWS",
      desc: "As an AWS SAA, my role is to be the keeper of the AWS Well Architected Framework pillars, ensuring customers are following best practices, guidance, and recommendations to develop cloud solutions that are secure, resilient, efficient, and managed with operational excellence.",
      icon: "fa-solid fa-cloud",
    },
    {
      name: "Software Engineer Lifecycle",
      desc: "As a software engineer i deal with the design, development, testing, and maintenance of software applications.",
      icon: "fa-solid fa-arrows-spin",
    },
    {
      name: "Database Management",
      desc: "Design optimized SQL and NoSql databases to implement the pillars of DB infrastructure, Data Integreity, Data Consistency, Data Recovery (by including backups) ",
      icon: "fa-solid fa-database",
    },
    {
      name: "Clean Code",
      desc: "I write a code that's easy to read, maintain, understand and change through structure and consistency yet remains robust and secure to withstand performance demands",
      icon: "fa-solid fa-code",
    },
  ];
  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
