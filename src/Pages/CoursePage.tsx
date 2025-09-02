import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../Redux/Store";
import { UpdateStringField } from "../Redux/Slices/Fields";
import { toPersianNumber } from "../Utils/ToPersianNumber";
import { useEffect, useRef, useState } from "react";
import Overlay from "../Components/Overlay/Overlay";
import SearchFilter from "../Components/SearchFilter/SearchFilter";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const field = useSelector((state: RootState) => state.fields);
  const dispatch = useDispatch<AppDispatch>();
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [showSearchFilter, setShowSearchFilter] = useState<boolean>(true);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (field.focusOnSearchInput) {
      searchInputRef.current?.focus();
    }
  }, [field.focusOnSearchInput]);

  return (
    <div className="h-full w-full bg-white dark:bg-primaryBlackColor overflow-hidden">
      {showSearchFilter && showOverlay ? (
        <>
          <SearchFilter
            setShowOverlay={setShowOverlay}
            setShowSearchFilter={setShowSearchFilter}
          />

          <Overlay showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
        </>
      ) : (
        <AnimatePresence>
          <motion.div
            key={"CoursePage"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <div className="min-h-screen bg-white dark:bg-primaryBlackColor pb-[80px]">
              <div className="bg-white dark:bg-primaryBlackColor">
                <div className="w-11/12 mx-auto flex flex-col gap-y-5">
                  <div className="flex items-center justify-between mt-10">
                    <p className="font-bold text-2xl text-primaryBlackColor dark:text-white">
                      دوره ها
                    </p>

                    <img
                      src="./public/Images/CourseImages/Avatar.png"
                      alt="Course-Page-Avatar"
                    />
                  </div>

                  <div className="relative">
                    <input
                      id="search-input-for-course-page"
                      ref={searchInputRef}
                      type="text"
                      name="searchInputForCoursePage"
                      placeholder="چه دوره ای میخوای؟"
                      value={field.searchInputForCoursePage}
                      onChange={(event) => {
                        const value = event.target.value;
                        dispatch(
                          UpdateStringField({
                            name: "searchInputForCoursePage",
                            value,
                          })
                        );
                      }}
                      className="border rounded-xl transition duration-300 w-full text-sm border-[#B8B8D2]
                     dark:border-[#B8B8D2]/20 text-primaryBlackColor dark:text-primaryWhiteColor outline-none 
                    bg-white dark:bg-inputBg pr-10 pl-5 py-3.5"
                    />

                    <i
                      className="bi bi-search text-secondaryLightColor dark:text-secondaryDarkColor
                  absolute top-1/2 -translate-y-1/2 right-4 text-[13px]"
                    ></i>

                    <i
                      className="bi bi-sliders2 text-secondaryLightColor dark:text-secondaryDarkColor
                    absolute top-1/2 -translate-y-1/2 left-2 leading-none px-2"
                      onClick={() => (
                        setShowOverlay(true), setShowSearchFilter(true)
                      )}
                    ></i>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 mt-0.5">
                    <div className="bg-[#CEECFE] h-24 rounded-xl relative">
                      <img
                        src="./public/Images/CourseImages/RightSectionImage.png"
                        alt="Right-Section-Image"
                        className="absolute left-1 bottom-0"
                      />

                      <div
                        className="rounded-full w-16 py-1.5 text-primaryBlueColor bg-white font-bold absolute
                    bottom-3 right-2 text-sm flex items-center justify-center"
                      >
                        زبان
                      </div>
                    </div>

                    <div className="bg-[#EFE0FF] h-24 rounded-xl relative">
                      <img
                        src="./public/Images/CourseImages/LeftSectionImage.png"
                        alt="Left-Section-Image"
                        className="absolute left-0 bottom-0"
                      />

                      <div
                        className="rounded-full w-16 py-1.5 text-[#9065BE] bg-white font-bold absolute
                    bottom-3 right-2 text-sm flex items-center justify-center"
                      >
                        نقاشی
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-11/12 mx-auto mt-10 flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-3">
                    <p className="text-lg text-primaryBlackColor dark:text-white font-bold">
                      دوره خود را انتخاب کنید
                    </p>

                    <div className="flex items-center gap-x-4">
                      <button
                        type="button"
                        className="w-20 text-sm py-1 flex items-center justify-center text-white bg-primaryBlueColor 
                        rounded-full"
                      >
                        همه
                      </button>

                      <button
                        type="button"
                        className="w-20 text-sm py-1 flex items-center justify-center dark:text-white
                      bg-[#F4F3FD] dark:bg-secondaryLightColor text-secondaryLightColor rounded-full"
                      >
                        محبوب
                      </button>

                      <button
                        type="button"
                        className="w-20 text-sm py-1 flex items-center justify-center dark:text-white
                      bg-[#F4F3FD] dark:bg-secondaryLightColor text-secondaryLightColor rounded-full"
                      >
                        جدید
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-5 py-2 h-[400px] overflow-y-auto scroll-hide">
                    <Link
                      to={"/course/product-design"}
                      className="flex items-center gap-x-9 p-4 rounded-xl shadow-lg dark:shadow-white/5
                    border border-secondaryLightColor/15 dark:border-white/10"
                    >
                      <div className="w-[70px] h-[70px] rounded-xl bg-[#C4C4C4]"></div>

                      <div className="flex flex-col justify-between h-[70px]">
                        <p className="text-primaryBlackColor dark:text-white text-sm line-clamp-1">
                          طراحی محصول نسخه ۱/۰
                        </p>

                        <p
                          className="flex items-center gap-x-1 text-secondaryLightColor dark:text-secondaryDarkColor\
                      text-xs"
                        >
                          <i className="bi bi-person-fill"></i>شهریار حسینی
                        </p>

                        <div className="flex items-center gap-x-1">
                          <span className="text-primaryBlueColor font-bold text-sm">
                            {toPersianNumber(190)} تومان
                          </span>
                          <span className="bg-[#FFEBF0] text-[#FF6905] px-2 py-[3px] rounded-full text-[10px]">
                            {toPersianNumber(15)} ساعت
                          </span>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to={"/course/logo-design"}
                      className="flex items-center gap-x-9 p-4 rounded-xl shadow-lg dark:shadow-white/5
                    border border-secondaryLightColor/15 dark:border-white/10"
                    >
                      <div className="w-[70px] h-[70px] rounded-xl bg-[#C4C4C4]"></div>

                      <div className="flex flex-col justify-between h-[70px]">
                        <p className="text-primaryBlackColor dark:text-white text-sm line-clamp-1">
                          طراحی لوگو
                        </p>

                        <p
                          className="flex items-center gap-x-1 text-secondaryLightColor dark:text-secondaryDarkColor\
                      text-xs"
                        >
                          <i className="bi bi-person-fill"></i>ایلیا معیل
                        </p>

                        <div className="flex items-center gap-x-1">
                          <span className="text-primaryBlueColor font-bold text-sm">
                            {toPersianNumber(600)} تومان
                          </span>
                          <span className="bg-[#FFEBF0] text-[#FF6905] px-2 py-[3px] rounded-full text-[10px]">
                            {toPersianNumber(25)} ساعت
                          </span>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to={"/course/javascript"}
                      className="flex items-center gap-x-9 p-4 rounded-xl shadow-lg dark:shadow-white/5
                    border border-secondaryLightColor/15 dark:border-white/10"
                    >
                      <div className="w-[70px] h-[70px] rounded-xl bg-[#C4C4C4]"></div>

                      <div className="flex flex-col justify-between h-[70px]">
                        <p className="text-primaryBlackColor dark:text-white text-sm line-clamp-1">
                          جاوا اسکریپت مقدماتی تا پیشرفته
                        </p>

                        <p
                          className="flex items-center gap-x-1 text-secondaryLightColor dark:text-secondaryDarkColor\
                      text-xs"
                        >
                          <i className="bi bi-person-fill"></i>علیرضا شعبانی
                        </p>

                        <div className="flex items-center gap-x-1">
                          <span className="text-primaryBlueColor font-bold text-sm">
                            {toPersianNumber(950)} تومان
                          </span>
                          <span className="bg-[#FFEBF0] text-[#FF6905] px-2 py-[3px] rounded-full text-[10px]">
                            {toPersianNumber(62)} ساعت
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Navbar />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default CoursePage;
