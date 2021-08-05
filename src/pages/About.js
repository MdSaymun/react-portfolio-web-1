import React from "react";
import { useGlobalContext } from "../utils/context";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, LinearProgress } from "@material-ui/core";

const About = () => {
  const { data } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const aboutMe = data.aboutMe;
  const { title, desc, name, DOB, Zip, email, Address, image, phone } = aboutMe;
  const aboutData = data.aboutData;
  // console.log(aboutData);
  // matarial ui
  const useStyles = makeStyles({
    root: {
      height: "8px",
    },
    barColorPrimary: {
      backgroundColor: "#397deb",
    },
  });
  const classes = useStyles();
  let { title: heading, item } = aboutData[index];
  // console.log(heading);

  return (
    <section className="section_about my-14">
      <div className="section about-center">
        <Row className="items-center justify-between">
          <Col md={6}>
            <div className="about-me-image p-6">
              <img src={image} alt={name} className="w-full" />
            </div>
          </Col>
          <Col md={6}>
            <div className="about-me-info">
              <h3 className="about-heading-small uppercase text-gray-600 text-base">my info</h3>
              <h2 className="font-bold text-3xl mb-4">{title}</h2>
              <p className="text-gray-600 text-base mb-4">{desc}</p>
              <div className="about-properties ">
                <div className="about-name flex flex-col">
                  <span className="text-lg font-semibold">Name : </span>
                  <span className="text-lg font-semibold">Date of Birth : </span>
                  <span className="text-lg font-semibold">Address : </span>
                  <span className="text-lg font-semibold">Zip : </span>
                  <span className="text-lg font-semibold">Email : </span>
                  <span className="text-lg font-semibold">Phone : </span>
                </div>
                <div className="about-property flex-col flex">
                  <span>{name}</span>
                  <span className="text-left">{DOB}</span>
                  <span className="text-left">{Address}</span>
                  <span className="text-left">{Zip}</span>
                  <span className="text-left">{email}</span>
                  <span className="text-left">{phone}</span>
                </div>
              </div>
              <h3 className="mt-4">
                <span className="text-blue-500 pr-2">120</span> Projects Complete
              </h3>
              <button className="btn_about mt-6 block">Hire me</button>
            </div>
          </Col>
        </Row>
        <div className="about-info mt-20 ">
          <div className="about-tab lg:flex-col flex ">
            {aboutData.map((item, i) => {
              return (
                <div className="item lg:pr-0 pr-2 lg:pb-3 " key={i}>
                  <button className={`font-semibold ${i === index && "border-l-4 pl-3 transition-all duration-300 text-blue-500 border-blue-500"}`} onClick={() => setIndex(i)}>
                    {item.title}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="about-tab-items lg:px-8">
            <h2 className="font-semibold text-xl text-blue-500 pb-4"> {heading}</h2>
            {item.map((tabitem, i) => {
              const { icon, time, place, text, title, skill, skillBar } = tabitem;
              return (
                <div key={i} className="tab-item flex items-start justify-center">
                  {icon && (
                    <div className="img mr-3 w-10 bg-blue-500 flex items-center justify-center">
                      <img className="icon w-full h-full " src={icon} alt="" />
                    </div>
                  )}
                  <div className="info pb-3">
                    <p className="text-blue-500 text-sm">{time}</p>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <h4 className="text-base font-semibold mb-2">{place}</h4>
                    <p className="text-gray-500 text-sm mb-2">{text}</p>
                  </div>
                  {skill && (
                    <Row className="w-full">
                      {skill.map((item, i) => {
                        const { name, bar, lastWeek, lastMonth } = item;
                        let progressBar = +bar;
                        return (
                          <Col lg={4} md={6} key={i}>
                            <div className="circle-progress w-full">
                              <div className="box mb-3 px-3 py-4 mx-3 flex flex-col items-center ">
                                <div className="text-center pb-3">{name}</div>
                                <div className="bar relative mb-2">
                                  <CircularProgress size={100} className="circleProgressColor" variant="determinate" value={progressBar} />
                                  <div className="label absolute">{bar}%</div>
                                </div>
                                <div className="code-time grid grid-cols-2 justify-between">
                                  <div className="last-week text-sm text-gray-600">
                                    {lastWeek}%<div>Last Week</div>
                                  </div>
                                  <div className="last-month text-sm text-gray-600">
                                    {lastMonth}%<div>Last Month</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                  {skillBar && (
                    <Row className="w-full">
                      {skillBar.map((item, ind) => {
                        const { name, width } = item;
                        let barProp = +width;
                        return (
                          <Col md={6} key={ind}>
                            <div className="linear-progress mt-4">
                              <div className="progress-info pb-2">
                                <div className="name">{name}</div>
                                <div className="width">{width}%</div>
                              </div>
                              <LinearProgress classes={{ root: classes.root, barColorPrimary: classes.barColorPrimary }} variant="determinate" className="mb-3" value={barProp} />
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
