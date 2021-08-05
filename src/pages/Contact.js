import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaRegAddressBook, FaPhone, FaGlobe, FaPaperPlane } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const contactData = [
    { icon: <FaRegAddressBook />, name: "Address", info: "West California USA 2101" },
    { icon: <FaPhone />, name: "Contact", info: "+202 224 243" },
    { icon: <FaPaperPlane />, name: "Email", info: "info@email.com" },
    { icon: <FaGlobe />, name: "Website", info: "www.yoursite.com" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required*"),
      name: Yup.string().max(15, "Must be 15 characters or less").required("Required*"),
      subject: Yup.string().max(15, "Must be 15 characters or less").required("Required*"),
      message: Yup.string().max(15, "Must be 15 characters or less").required("Required*"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="mt-20 mb-10 section_contact">
      <div className="section section-contact-center">
        <div className="contact-header mb-4">
          <h1 className="text-center relative text-xl font-bold">Contact</h1>
          <p className="text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident ullam <br /> unde veritatis non!
          </p>
        </div>
        <div className="contact-box-container">
          <Row>
            {contactData.map((item, i) => {
              const { icon, info, name } = item;
              return (
                <Col lg={3} md={6} key={i} className=" my-3">
                  <div className="box-contact p-4 text-center h-full">
                    <div className="icon mb-3 mt-3 grid place-items-center bg-blue-500 mx-auto w-14 h-14 rounded-full text-2xl text-white">{icon}</div>
                    <div className="name font-bold mb-3">{name}</div>
                    <div className="address-info mb-4">{info}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="contact-form-container my-16">
          <Row className="contact-form-row items-center">
            <Col md={6}>
              <div className="contact-form-col">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  alt=""
                  className="contact-form-img w-full rounded-lg"
                />
              </div>
            </Col>
            <Col md={6}>
              <form onSubmit={formik.handleSubmit} className="contact-form flex flex-col w-full px-4 py-5 border bg-gray-100">
                <div className="mb-3">
                  <input {...formik.getFieldProps("name")} name="name" className="w-full p-2" type="text" placeholder="name" />
                  <p className="text-red-500 text-right px-2"> {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}</p>
                </div>
                <div className="mb-3">
                  <input {...formik.getFieldProps("email")} name="email" className="w-full p-2" type="text" placeholder="email" />
                  <p className="text-red-500 text-right px-2"> {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}</p>
                </div>
                <div className="mb-3">
                  <input {...formik.getFieldProps("subject")} name="subject" className="w-full p-2" type="text" placeholder="Subject" />
                  <p className="text-red-500 text-right px-2">{formik.touched.subject && formik.errors.subject ? <div>{formik.errors.subject}</div> : null}</p>
                </div>
                <div className="mb-3">
                  <textarea name="message" placeholder="message" className="w-full p-2" {...formik.getFieldProps("message")} cols="30" rows="5"></textarea>
                  <p className="text-red-500 text-right px-2">{formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}</p>
                </div>
                <div className="btn-form">
                  <button className="lg:w-1/3 md:w-2/3 bg-blue-500 w-full text-white text-opacity-80 font-base   py-2 rounded-full mt-3">Send Message</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Contact;
