import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import "./Banner.css";

<div>
  <div>
    <div>
      <Link>Discover more</Link>
      <Link>Latest Project</Link>
    </div>
  </div>
  <div></div>
</div>;

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-8 mb-8">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-lg" />
        <div className="absolute rounded-lg h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-5">
          <div className="w-1/3 mt-6   pl-14 pt-10">
            <p className="text-6xl text-white mb-4 font-bold">
              Affordable <br /> price for <br /> car servicing
            </p>
            <p className="text-white mb-4 text-2xl">
              There are many variations of passengers of available, But the
              majority had suffered Alternation in some form.{" "}
            </p>
            <div>
              <button className="btn btn-discoverMore mr-3 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-latestProject text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
          <a href="#slide4" className="btn mx-2 btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-lg" />
        <div className="absolute h-full rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-5">
          <div className="w-1/3 mt-6   pl-14 pt-10">
            <p className="text-6xl text-white mb-4 font-bold">
              Affordable <br /> price for <br /> car servicing
            </p>
            <p className="text-white mb-4 text-2xl">
              There are many variations of passengers of available, But the
              majority had suffered Alternation in some form.{" "}
            </p>
            <div>
              <button className="btn btn-discoverMore mr-3 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-latestProject text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
          <a href="#slide1" className="btn mx-2 btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-lg" />
        <div className="absolute h-full rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-5">
          <div className="w-1/3 mt-6   pl-14 pt-10">
            <p className="text-6xl text-white mb-4 font-bold">
              Affordable <br /> price for <br /> car servicing
            </p>
            <p className="text-white mb-4 text-2xl">
              There are many variations of passengers of available, But the
              majority had suffered Alternation in some form.{" "}
            </p>
            <div>
              <button className="btn btn-discoverMore mr-3 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-latestProject text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
          <a href="#slide2" className="btn mx-2 btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-lg" />
        <div className="absolute h-full rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] right-5">
          <div className="w-1/3 mt-6   pl-14 pt-10">
            <p className="text-6xl text-white mb-4 font-bold">
              Affordable <br /> price for <br /> car servicing
            </p>
            <p className="text-white mb-4 text-2xl">
              There are many variations of passengers of available, But the
              majority had suffered Alternation in some form.{" "}
            </p>
            <div>
              <button className="btn btn-discoverMore mr-3 text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-latestProject text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 justify-end left-5 right-5 bottom-0">
          <a href="#slide3" className="btn mx-2 btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
