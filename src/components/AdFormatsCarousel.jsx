import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaCheckCircle,
  FaDollarSign,
  FaSyncAlt,
  FaArrowRight,
} from "react-icons/fa";
import inpage from "../assets/adsimages/inpage.webp";
import popunder from "../assets/adsimages/popunder.webp";
import video from "../assets/adsimages/video.webp";
import push from "../assets/adsimages/push.webp";
import directlink from "../assets/adsimages/directlink.webp";
import banner from "../assets/adsimages/banner.webp";

const adFormats = [
  {
    id: 1,
    title: "POPUNDER",
    img: popunder,
    bid: "$0.32",
    model: "CPM, CPA",
    volume: "> 10M",
  },
  {
    id: 2,
    title: "VIDEO",
    img: video,
    bid: "$0.04",
    model: "CPM, CPC",
    volume: "> 10M",
  },
  {
    id: 3,
    title: "BANNER",
    img: banner,
    bid: "$0.04",
    model: "CPM, CPC",
    volume: "> 10M",
  },
  {
    id: 4,
    title: "IN-PAGE",
    img: inpage,
    bid: "$0.0013",
    model: "CPC, CPM",
    volume: "> 10M",
  },
  {
    id: 5,
    title: "PUSH",
    img: push,
    bid: "$0.0061",
    model: "CPC",
    volume: "> 6M",
  },
  {
    id: 6,
    title: "Direct Link",
    img: directlink,
    bid: "$0.080",
    model: "CPC",
    volume: "> 6M",
  },
];

const AdFormatsCarousel = () => {
  return (
    <div id="adsformat" className="w-full px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">AD FORMATS</h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", // Link to custom pagination container
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        className="w-full max-w-6xl"
      >
        {adFormats.map((ad) => (
          <SwiperSlide key={ad.id} className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-4 w-72 h-96 flex flex-col justify-between">
              <img
                src={ad.img}
                alt={ad.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold text-center mt-4">
                {ad.title}
              </h3>
              <div className="mt-4 space-y-2 text-gray-700 text-sm">
                <p className="flex items-center">
                  <FaCheckCircle className="text-blue-500 mr-2" /> RECOMMENDED
                  BID: <span className="font-bold ml-1">{ad.bid}</span>
                </p>
                <p className="flex items-center">
                  <FaDollarSign className="text-blue-500 mr-2" /> PRICING MODEL:{" "}
                  <span className="font-bold ml-1">{ad.model}</span>
                </p>
                <p className="flex items-center">
                  <FaSyncAlt className="text-blue-500 mr-2" /> TRAFFIC VOLUME:{" "}
                  <span className="font-bold ml-1">{ad.volume}</span>
                </p>
              </div>
              <button className="mt-4 w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-800 text-white py-2 rounded-lg hover:opacity-90 transition text-sm">
                MORE <FaArrowRight className="ml-2" />
              </button>
            </div>
          </SwiperSlide>
        ))}
        {/* Navigation arrows (hidden on smaller screens) */}
        <div className="swiper-button-next hidden lg:block my-5"></div>
        <div className="swiper-button-prev hidden lg:block my-5"></div>
      </Swiper>
      {/* Custom pagination container with padding */}
      <div className="swiper-pagination !relative !mt-8"></div>{" "}
      {/* Adjusted position */}
    </div>
  );
};

export default AdFormatsCarousel;
