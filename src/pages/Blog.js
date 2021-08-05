import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../utils/context";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  const { LocalData } = useGlobalContext();
  const { blogData } = LocalData;
  return (
    <section className="section_blog mt-20 mb-10">
      <div className="section section-blog-center">
        <div className="section-blog-header">
          <h1 className="relative text-center text-xl font-bold">Our Blog</h1>
          <p className="text-center text-gray-600 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem suscipit libero quaerat commodi reprehenderit.</p>
        </div>
        <div className="blog-container">
          <Row>
            {blogData.map((item, i) => {
              // console.log(item);
              const { title, id, text, user, image, date, comment } = item;
              return (
                <Col lg={4} md={6} className="blog my-3" key={i}>
                  <Link to={`/singleblog/${id}`} className="h-full mb-4 hover:opacity-100 transition-all duration-400 opacity-90  blog-box flex flex-col items-start pb-4 ">
                    <img src={image} alt="" className="w-full " />
                    <h3 className=" px-3 text-xl font-semibold mb-2">{title}</h3>
                    <div className="px-3 time flex items-center text-blue-500 mb-2">
                      <div className="date capitalize">{date}</div>
                      <div className="user ml-2">{user}</div>
                      <div className="comment flex items-center">
                        <div className="icon ml-3">
                          <FaComment />
                        </div>
                        <div className="mx-2">{comment}</div>
                      </div>
                    </div>
                    <div className="px-3 text text-gray-600">{text}</div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Blog;
