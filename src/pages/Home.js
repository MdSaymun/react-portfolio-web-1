import React from "react";
import { Row, Col } from "react-bootstrap";
// import { CircularProgress } from "@material-ui/core";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <>
      <section className=" section_home">
        {/* <div className="home_shape" /> */}
        <div className="section home-center ">
          <Row className="m-0 justify-start">
            <Col md={8} lg={6}>
              <div className="hero-box-info py-10 ">
                <h4 className="uppercase text-xl text-gray-700">hey i am</h4>
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold pt-3">
                  Ronaldo Fradrickson, <br /> <span>I love coding!</span>
                </h1>
                <div className="buttons flex items-center justify-start pt-3">
                  <button className=" btn-hero-bg">Hire me</button>
                  <button className="btn-hero-border">Download CV</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
