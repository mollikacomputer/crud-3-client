import person from "../../assets/images/about_us/person.jpg";
import part from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:w-1/2 relative ">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={part} className="w-1/2 rounded-lg shadow-2xl absolute right-10 top-1/2 border-8 border-white" />
        </div>
        <div className="lg:w-1/2 ">
          <h1 className="text-5xl font-bold mt-10">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
