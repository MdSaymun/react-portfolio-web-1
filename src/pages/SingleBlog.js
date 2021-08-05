import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { FaComment } from "react-icons/fa";

const SingleBlog = () => {
  const { params } = useParams();
  const { LocalData } = useGlobalContext();
  const { singleBlog } = LocalData;
  const blog = singleBlog.filter((item) => item.id === params);
  // console.log(blog);
  const { image, title, text, user, date, comment } = blog[0];
  return (
    <section className="single_blog mt-20 mb-10">
      <div className="section single-blog-center lg:px-5 py-6">
        <h1 className="relative text-center capitalize text-xl font-semibold">Single blog page</h1>
        <div className="single-blog-box lg:w-3/4 w-full mx-auto p-4">
          <img src={image} alt="" className="w-full mb-3" />
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="time flex items-center text-blue-500 mb-2">
            <div className="date">{date}</div>
            <div className="user ml-2">{user}</div>
            <div className="comment flex items-center">
              <div className="icon ml-3">
                <FaComment />
              </div>
              <div className="mx-2">{comment}</div>
            </div>
          </div>
          <div className="text">{text}</div>
          <div className="go-to-blog-page bg-blue-500 py-2 px-4 w-32 mt-4 hover:text-opacity-70 hover:text-gray-400 rounded-sm text-white text-center">
            <Link to="/blog">Go To Blog</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
