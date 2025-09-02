import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../Redux/Store";
import "swiper/css";
import { UpdateStatus } from "../../Redux/Slices/UserStatus";

const WelcomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="h-screen overflow-hidden flex justify-center items-center relative bg-white dark:bg-primaryBlackColor">
      <p
        className="text-secondaryLightColor dark:text-secondaryDarkColor text-sm absolute top-20 left-7 select-none"
        onClick={() => swiperRef.current?.slideTo(2, 500)}
      >
        رد کردن
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        dir="rtl"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative select-none"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-10 mb-20">
            <img
              src="./public/Images/WelcomeImages/W_Image1.png"
              alt="Welcome Image 1"
              loading="lazy"
              className="w-[260px] h-[260px] flex-shrink-0"
            />
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl w-48 text-center text-primaryBlackColor dark:text-primaryWhiteColor">
                دوره‌های آزمایشی رایگان متعدد
              </p>
              <p className="text-secondaryLightColor w-52 text-center dark:text-secondaryDarkColor text-sm">
                دوره‌های رایگان برای شما تا راه یادگیری خود را پیدا کنید
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-10 mb-20">
            <img
              src="./public/Images/WelcomeImages/W_Image2.png"
              alt="Welcome Image 2"
              loading="lazy"
              className="w-[260px] h-[260px] flex-shrink-0"
            />
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl w-48 text-center text-primaryBlackColor dark:text-primaryWhiteColor">
                یادگیری سریع و آسان
              </p>
              <p className="text-secondaryLightColor w-52 text-center dark:text-secondaryDarkColor text-sm">
                یادگیری آسان و سریع در هر زمان برای کمک به شما در بهبود
                مهارت‌های مختلف
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center gap-y-10 mb-20">
            <img
              src="./public/Images/WelcomeImages/W_Image3.png"
              alt="Welcome Image 3"
              loading="lazy"
              className="w-[260px] h-[260px] flex-shrink-0"
            />
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-2xl w-48 text-center text-primaryBlackColor dark:text-primaryWhiteColor">
                برنامه مطالعه خودتان را ایجاد کنید
              </p>
              <p className="text-secondaryLightColor w-52 text-center dark:text-secondaryDarkColor text-sm">
                طبق برنامه مطالعه کنید، انگیزه مطالعه را بیشتر کنید
              </p>
            </div>
          </div>
        </SwiperSlide>

        <div className="flex items-center gap-x-1 absolute bottom-10 left-1/2 -translate-x-1/2">
          {[0, 1, 2].map((i: number) => (
            <motion.div
              key={i}
              className={`h-2 rounded-full transition-colors flex ${
                activeIndex === i
                  ? "bg-primaryBlueColor w-8"
                  : "bg-[#EAEAFF] dark:bg-secondaryLightColor w-4"
              }`}
              animate={{ width: activeIndex === i ? 32 : 16 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          ))}
        </div>
      </Swiper>

      <AnimatePresence mode="popLayout" initial={true}>
        {activeIndex === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="grid grid-cols-2 gap-x-3 absolute bottom-20 w-full px-10 select-none"
          >
            <button
              type="button"
              onClick={() => dispatch(UpdateStatus("Signup"))}
              className="py-3.5 rounded-xl bg-primaryBlueColor text-white"
            >
              ثبت نام
            </button>
            <button
              type="button"
              onClick={() => dispatch(UpdateStatus("Login"))}
              className="py-3.5 rounded-xl text-primaryBlueColor border border-primaryBlueColor dark:text-[#F4F3FD]
              dark:bg-secondaryLightColor"
            >
              ورود
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WelcomeScreen;
