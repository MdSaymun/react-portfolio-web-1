import React from "react";
import { useGlobalContext } from "../utils/context";
import { Row, Col } from "react-bootstrap";
const Services = () => {
  // const { data } = useGlobalContext();
  const { LocalData } = useGlobalContext();
  // const { servicesData } = data;
  const servicesData = LocalData.servicesData;
  return (
    <section className="section_services mb-5 mt-16 pt-5 ">
      <div className="section services-center">
        <div className="services-header px-2 mb-4">
          <h1 className="text-xl font-bold relative text-center">Services page</h1>
          <p className="text-center text-gray-600 mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, velit obcaecati animi hic placeat porro numquam nihil error culpa voluptatem?
          </p>
        </div>
        <div className="services-items  ">
          <Row className="w-full mx-auto items-center row-services-items">
            {servicesData.map((item) => {
              // console.log(item);
              const { id, title, icon, text, img } = item;
              return (
                <Col lg={4} md={6} key={id}>
                  <div className="services-box flex items-center flex-col justify-center pt-4 pb-5 px-4 text-center border">
                    <img src={`/images/icons/${icon}`} className="w-10" alt="" />
                    <div className="title relative pb-2">{title}</div>
                    <p>{text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Services;
