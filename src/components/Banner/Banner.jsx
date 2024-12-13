import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[10px_10px_12px_rgba(0,0,0,0.4)] object-cover rounded-md"
            />
          </div>

          {/* Text Details Section */}
          <div className="flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-center sm:text-left"
            >
              Winter Sale - Up to 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5 text-center sm:text-left"
            >
              Explore our exclusive collection with amazing discounts. Quality
              products, fast delivery, and seamless shopping experience await
              you.
            </p>
            <div className="flex flex-col gap-4">
              {/* Features Section */}
              <FeatureItem
                icon={
                  <GrSecure className="text-4xl shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                }
                text="Quality Products"
              />
              <FeatureItem
                icon={
                  <IoFastFood className="text-4xl shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                }
                text="Fast Delivery"
              />
              <FeatureItem
                icon={
                  <GiFoodTruck className="text-4xl shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                }
                text="Easy Payment Methods"
              />
              <FeatureItem
                icon={
                  <GiFoodTruck className="text-4xl shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                }
                text="Exciting Offers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FeatureItem Component for Reusability
const FeatureItem = ({ icon, text }) => {
  return (
    <div data-aos="fade-up" className="flex items-center gap-4">
      {icon}
      <p className="text-gray-700 dark:text-gray-200">{text}</p>
    </div>
  );
};

export default Banner;
