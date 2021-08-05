import React from "react";
import { useGlobalContext } from "../utils/context";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Testimonial = () => {
  const { LocalData } = useGlobalContext();
  const { reviewData } = LocalData;
  const [index, setIndex] = React.useState(0);
  const Condition = React.useCallback(
    (num) => {
      if (num < 0) {
        return reviewData.length - 1;
      }
      if (num > reviewData.length - 1) {
        return 0;
      }
      return num;
    },
    [reviewData]
  );
  React.useEffect(() => {
    let interval = setInterval(() => {
      setIndex(Condition(index + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [index, Condition]);
  return (
    <section className="section_testimonial mt-20">
      <div className="section testimonial-center">
        <div className="testimonial-header">
          <h1 className="relative text-center font-bold text-xl">What Client Says about? </h1>
          <p className="text-center text-gray-600 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi cumque fugit aliquam qui?</p>
        </div>
        <div className="testimonial-section-slider my-10">
          <div className=" relative w-full slider-container ">
            {reviewData.map((item, sliderIndex) => {
              const { name, desc, deg, image } = item;
              let position = "next-slide";
              if (sliderIndex === index) {
                position = "active-slide";
              }
              if (sliderIndex === index - 1 || (index === 0 && sliderIndex === reviewData.length - 1)) {
                position = "last-slide";
              }
              return (
                <div key={sliderIndex} className={`${position} section-slide absolute lg:w-1/2 w-3/4 top-1/2 left-1/2 transition-all duration-500`}>
                  <div className="mx-3 px-3 py-lg-4 py-2">
                    {/* <h1 className="text-center">{id}</h1> */}
                    <div className="info flex items-start">
                      <FaQuoteLeft className="text-3xl text-blue-500 -mt-3 " />
                      <div className="desc text-base text-gray-600 ml-2">{desc}</div>
                    </div>
                    <div className="info-client flex mt-5 items-center">
                      <div className="md:w-20  md:h-20 w-8 h-8 bg-center bg-no-repeat rounded-full bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
                      <div className="bio-client ml-3">
                        <div className="name md:text-lg text-base font-semibold">{name}</div>
                        <div className="designation text-sm text-gray-600">{deg}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="slider-navigator absolute left-0 md:px-4 top-1/2 flex justify-between w-full items-center">
              <button className="button bg-blue-500 lg:p-3 p-2 text-white" onClick={() => setIndex(Condition(index - 1))}>
                <FaChevronLeft />
              </button>
              <button onClick={() => setIndex(Condition(index + 1))} className="button bg-blue-500 text-white lg:p-3 p-2 ">
                <FaChevronRight />
              </button>
            </div>
            <div className="slider-indicator absolute bottom-0 left-0 flex items-center justify-center w-full">
              {reviewData.map((item, Indicatorindex) => {
                return (
                  <div
                    key={Indicatorindex}
                    className={`${index === Indicatorindex && "bg-blue-400"} bg-blue-200 h-4 w-4 mx-2 cursor-pointer rounded-full text-center`}
                    onClick={() => setIndex(Indicatorindex)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
