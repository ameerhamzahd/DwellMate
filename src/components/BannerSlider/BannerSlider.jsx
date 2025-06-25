import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaChevronRight } from "react-icons/fa6";

const BannerSlider = () => {
  const [bannerSliders, setBannerSliders] = useState([]);

  useEffect(() => {
    fetch('/bannerSlider.json')
      .then((response) => response.json())
      .then((data) => setBannerSliders(data))
      .catch((error) => console.error('Error fetching banner slider data:', error));
  }, []);

  return (
    <div className='w-full'>
      {bannerSliders.length > 0 && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {
            bannerSliders.map((bannerSlider) => {
              const titleWords = bannerSlider.title.split(' ');
              const staticWords = titleWords.slice(0, -2).join(' ');
              const dynamicWords = titleWords.slice(-2).join(' ');

              return (
                <SwiperSlide key={bannerSlider.id}>
                  <div
                    className="hero h-[650px] bg-top bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${bannerSlider.image})`
                    }}
                  >
                    <div className="bg-opacity-60 hero-overlay"></div>
                    <div className="text-center hero-content text-neutral-content">
                      <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold leading-tight md:text-7xl">
                          {staticWords}{' '}
                          <span className="text-violet-300">
                            <Typewriter
                              words={[dynamicWords]}
                              loop={true}
                              cursor
                              cursorStyle="_"
                              typeSpeed={100}
                              deleteSpeed={50}
                              delaySpeed={1000}
                            />
                          </span>
                        </h1>
                        <p className="mb-8 text-lg md:text-xl">
                          {bannerSlider.subtitle}
                        </p>

                        <Link to="/browse-listing" className="rounded-full btn btn-primary btn-lg">
                          Find Your Roommate <FaChevronRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
};

export default BannerSlider;
