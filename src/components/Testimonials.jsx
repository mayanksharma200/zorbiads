import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="testimonials" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 bg-gradient-to-r from-blue-500 to-indigo-800 bg-clip-text text-transparent">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-white py-3 px-4 mx-3 rounded-md text-gray-900 shadow-md border border-gray-300">
              <p className="text-gray-700">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-gray-400"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="text-gray-900 font-semibold">
                    {testimonial.user}
                  </h6>
                  <span className="text-sm font-normal italic text-gray-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
