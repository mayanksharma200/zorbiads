import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaBitcoin,
  FaApplePay,
  FaGooglePay,
  FaStripe
} from "react-icons/fa";

const paymentMethods = [
  {
    id: 1,
    icon: <FaPaypal size={40} className="text-blue-500" />,
    name: "PayPal",
  },
  {
    id: 2,
    icon: <FaCcVisa size={40} className="text-blue-700" />,
    name: "Visa",
  },
  {
    id: 3,
    icon: <FaCcMastercard size={40} className="text-red-500" />,
    name: "MasterCard",
  },
  {
    id: 4,
    icon: <FaCcAmex size={40} className="text-blue-400" />,
    name: "Amex",
  },
  {
    id: 5,
    icon: <FaBitcoin size={40} className="text-yellow-500" />,
    name: "Bitcoin",
  },
  {
    id: 6,
    icon: <FaApplePay size={40} className="text-black" />,
    name: "Apple Pay",
  },
  {
    id: 7,
    icon: <FaGooglePay size={40} className="text-gray-600" />,
    name: "Google Pay",
  },
  {
    id: 8,
    icon: (
      <FaStripe
        size={40}
        className="text-purple-600 hover:text-purple-800 transition-colors"
      />
    ),
    name: "Stripe",
  },
];

const PaymentMethodsCarousel = () => {
  console.log(paymentMethods);

  return (
    <div className="w-full flex justify-center mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className="w-full max-w-2xl"
      >
        {paymentMethods.map((method) => (
          <SwiperSlide
            key={method.id}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              {method.icon}
              <p className="text-sm text-gray-600 mt-2">{method.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PaymentMethodsCarousel;
