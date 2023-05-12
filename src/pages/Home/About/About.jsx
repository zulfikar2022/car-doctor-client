import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen   rounded-lg">
      {" "}
      {/* bg-base-200 */}
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" rounded-lg  w-3/4 " />
          <img
            src={parts}
            className=" border-white border-8 absolute rounded-lg w-1/2  top-36 left-40  "
          />
        </div>
        <div className="lg:w-1/2">
            <p className="text-3xl text-orange-600 font-bold pb-3">About Us</p>
          <h1 className="text-5xl font-bold pb-2">
            We are qualified and of experienced in this field
          </h1>
          <p className="py-3 font-semibold text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <p className="py-1 font-semibold text-gray-500 pb-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-orange btn-outline ">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
