import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../utils/context";
import NumberCounter from "number-counter";

const Projects = () => {
  const { LocalData } = useGlobalContext();
  const { projectData } = LocalData;
  const [index, setIndex] = React.useState(0);
  //
  const allCategories = ["all", ...new Set(projectData.map((item) => item.category))];
  const [project, setProject] = React.useState(projectData);

  const handleCategory = (catName) => {
    if (catName === "all") {
      return setProject(projectData);
    }
    const filterItem = projectData.filter((item) => item.category === catName);
    setProject(filterItem);
  };
  const counter = [
    { count: 100, name: "Award" },
    { count: 402, name: "Complete Projects" },
    { count: 402, name: "Happy Customers" },
    { count: 203, name: "Cup of coffee" },
  ];

  return (
    <>
      <section className="section_projects mt-24">
        <div className="section projects-center">
          <div className="projects-header">
            <h1 className="relative text-xl font-bold text-center">Our Projects</h1>
            <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste ad laborum reiciendis adipisci </p>
          </div>
          <div className="projects-categories flex w-full items-center justify-start my-10">
            {allCategories.map((item, i) => {
              return (
                <div key={i} className="category">
                  <button
                    onClick={() => {
                      handleCategory(item);
                      setIndex(i);
                    }}
                    className={`capitalize ${i === index && "border-b-2 border-blue-500"}`}
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="projects-items my-4">
            <Row className="w-full mx-0 ">
              {project.map((item, i) => {
                const { title, category, image } = item;
                return (
                  <Col lg={3} md={4} className=" p-0" key={i}>
                    <div className="projects-box text-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}>
                      <div className="project-info h-52">
                        <h1 className="pt-10 pb-4 text-xl">{title}</h1>
                        <h2 className="mt-5">{category}</h2>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="section_counter py-10">
            <Row>
              {counter.map((item, i) => {
                return (
                  <Col key={i} lg={3} md={6}>
                    <div className="counter p-4 mb-3 text-center rounded-md">
                      <NumberCounter end={item.count} delay={10} className="increment text-2xl text-blue-400 font-bold text-center mb-2" preFix="" postFix="" />
                      <div className="text mb-2">{item.name}</div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
