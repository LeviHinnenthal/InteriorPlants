import React from "react";
import BannerImg from "../../assets/banner.png";
import BannerImgMobile from "../../assets/bannerMobile.png";

import SearchBarBanner from "../SearchBarBanner/SearchBarBanner";
const Banner = () => {
  return (
    <div className=" banner h-[calc(100vh-80px)] flex flex-col items-center">
      <img className="absolute w-full -mt-[80px] object-cover object-bottom h-screen desktopElement" src={BannerImg} alt="Banner Img" />
      <img className="absolute w-full -mt-[80px] object-cover object-bottom h-screen mobileElement" src={BannerImgMobile} alt="Banner Img" />
      <h1 className="text-white text-2xl w-[90%] md:text-6xl text center relative font-black leading-8 md:leading-[65px] pt-10 pb-6">
        Bring Serenity to Your Place <br className="desktopElement"/> With Interior Plants
      </h1>
      <p className="text-white text-sm relative font-md">
        find your dream plant for you home decoration <br /> with us, and we
        will make it happen.
      </p>
      <SearchBarBanner />
    </div>
  );
};

export default Banner;
