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
  FaStripe,
} from "react-icons/fa";

const paymentMethods = [
  {
    id: 1,
    icon: (
      <FaPaypal
        size={40}
        className="text-blue-500 hover:text-blue-700 transition-colors"
      />
    ),
    name: "PayPal",
  },
  {
    id: 2,
    icon: (
      <FaCcVisa
        size={40}
        className="text-blue-700 hover:text-blue-900 transition-colors"
      />
    ),
    name: "Visa",
  },
  {
    id: 3,
    icon: (
      <FaCcMastercard
        size={40}
        className="text-red-600 hover:text-red-800 transition-colors"
      />
    ),
    name: "MasterCard",
  },
  {
    id: 4,
    icon: (
      <FaCcAmex
        size={40}
        className="text-blue-400 hover:text-blue-700 transition-colors"
      />
    ),
    name: "Amex",
  },
  {
    id: 5,
    icon: (
      <FaBitcoin
        size={40}
        className="text-yellow-500 hover:text-yellow-700 transition-colors"
      />
    ),
    name: "Bitcoin",
  },
  {
    id: 6,
    icon: <FaApplePay size={40} className="text-neutral-100" />,
    name: "Apple Pay",
  },
  {
    id: 7,
    icon: <FaGooglePay size={40} className="text-neutral-500" />,
    name: "Google Pay",
  },
  {
    id: 8,
    icon: (
      <FaStripe
        size={40}
        className="text-purple-500 hover:text-purple-700 transition-colors"
      />
    ),
    name: "Stripe",
  },
];

const PaymentMethodsCarousel = () => {
  console.log(paymentMethods);

  return (
    <div className="w-full flex justify-center mt-10 bg-neutral-900 py-10">
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
              <p className="text-sm text-neutral-400 mt-2">{method.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PaymentMethodsCarousel;
