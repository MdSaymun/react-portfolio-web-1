import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import SingleBlog from "../pages/SingleBlog";
import Testimonial from "../pages/Testimonial";
import Error from "../pages/Error";
const route = [
  { path: "/", component: Home, exact: true },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/projects", component: Projects },
  { path: "/blog", component: Blog },
  { path: "/services", component: Services },
  { path: "/singleblog/:params", exact: true, component: SingleBlog },
  { path: "/testimonial", component: Testimonial },
  { path: "*", component: Error },
];
export default route;
