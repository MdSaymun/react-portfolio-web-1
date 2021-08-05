import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaChevronRight, FaLocationArrow, FaPaperPlane, FaPhone, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
const Footer = () => {
  const { navLinks } = useGlobalContext();
  const [readmore, setReadmore] = useState(false);
  let aboutText = `Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, soluta. elit. Animi dignissimos in deleniti eius
              itaque! `;
  return (
    <section className="bg-gray-800 section_footer">
      <div className="section footer-center text-gray-50 px-4 py-10">
        <Row>
          <Col lg={3} md={6}>
            <div className="footer-info-talk-about py-10 ">
              <h3 className="mb-3 text-xl">Lets Talk About</h3>
              <div className="text-gray-200 font-light text-left">
                {readmore ? aboutText : `${aboutText.substring(0, 100)}...`}
                <div className="redmore flex items-center">
                  <button className="btn-footer text-md inline-block capitalize" onClick={() => setReadmore(!readmore)}>
                    {readmore ? "show less" : "read more"}
                  </button>
                  <span>
                    <FaChevronRight className="inline-block" />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-info-links py-10 ">
              <h3 className="mb-3 text-xl">Links</h3>
              {navLinks.map((item, i) => {
                const { link, path } = item;
                return (
                  <div key={i} className="flex items-center pb-2">
                    <span className="mr-2">
                      <FaChevronRight />
                    </span>
                    <Link to={path} className="hover:text-gray-400  font-normal text-gray-300 text-md">
                      {link}
                    </Link>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-info-services py-10 ">
              <h3 className="mb-3 text-xl">Services</h3>
              <div className="flex items-center pb-2">
                <span className="mr-2">
                  <FaChevronRight />
                </span>
                <div className="hover:text-gray-400  font-normal text-gray-300 text-md">Web development</div>
              </div>
              <div className="flex items-center pb-2">
                <span className="mr-2">
                  <FaChevronRight />
                </span>
                <div className="hover:text-gray-400 font-normal text-gray-300 text-md">Web Design</div>
              </div>
              <div className="flex items-center pb-2">
                <span className="mr-2">
                  <FaChevronRight />
                </span>
                <div className="hover:text-gray-400 font-normal text-gray-300 text-md">SEO</div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-info-contact py-10 ">
              <h3 className="mb-3 text-xl">Have a Questions</h3>
              <div className="location flex items-start">
                <span className="text-base pr-3">
                  <FaLocationArrow />
                </span>
                <p>203 Forke St. Mountain View San Francisco, California, USA</p>
              </div>
              <div className="phone flex items-center">
                <span className="pr-3 font-light text-base">
                  <FaPhone />
                </span>
                +2 1234-2343
              </div>
              <div className="email flex items-center pt-4 font-light text-base">
                <span className="pr-3 font-light text-base">
                  <FaPaperPlane />
                </span>
                info@gmail.com
              </div>
              <div className="icon-social flex items-center pt-4">
                <span className="bg-opacity-50 bg-gray-600">
                  <Link to="#">
                    <FaFacebook />
                  </Link>
                </span>
                <span className="bg-opacity-50 bg-gray-600">
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                </span>
                <span className="bg-opacity-50 bg-gray-600">
                  <Link to="#">
                    <FaGithub />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <h3 className="text-center text-base font-light">Copyright ©2021 All rights reserved | This template is made with❤by Uni Coder </h3>
      </div>
    </section>
  );
};

export default Footer;
