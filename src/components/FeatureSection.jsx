import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div
      id="features"
      className="relative mt-20 border-b border-gray-300 min-h-[800px] bg-white"
    >
      <div className="text-center">
        <span className="bg-gray-100 text-blue-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-gray-900">
          Easily build{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-blue-100 text-blue-600 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-gray-900">
                  {feature.text}
                </h5>
                <p className="text-md p-2 mb-20 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
