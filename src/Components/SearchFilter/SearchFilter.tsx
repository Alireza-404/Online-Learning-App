import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toPersianNumber } from "../../Utils/ToPersianNumber";

interface PropsType {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSearchFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchFilter = ({ setShowOverlay, setShowSearchFilter }: PropsType) => {
  const [minVal, setMinVal] = useState<number>(100);
  const [maxVal, setMaxVal] = useState<number>(500);
  const [categoriesActiveButtons, setCategoriesActiveButtons] = useState<
    boolean[]
  >([true, false, false, false, false, false]);

  const [durationActive, setDurationActive] = useState<number | null>(null);

  const min: number = 0;
  const max: number = 999;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={"SearchFilter"}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-blackColor rounded-t-3xl fixed bottom-0 w-full h-[600px] z-50 px-5 py-7
        flex flex-col gap-y-5"
      >
        <div className="relative">
          <i
            className="bi bi-x-lg text-primaryBlackColor dark:text-white absolute right-0 top-1/2
            -translate-y-1/2 text-lg"
            onClick={() => {
              setShowOverlay(false);
              setShowSearchFilter(false);
            }}
          ></i>

          <p className="font-bold text-lg text-primaryBlackColor dark:text-white text-center">
            فیلتر جستجو
          </p>
        </div>

        <div className="flex flex-col flex-grow justify-between">
          {/* Categories */}
          <div className="flex flex-col gap-y-3.5">
            <p className="text-primaryBlackColor dark:text-white">
              دسته بندی ها
            </p>

            <div className="flex items-center gap-3 flex-wrap w-2/3">
              {[
                "طراحی",
                "نقاشی",
                "کدنویسی",
                "موسیقی",
                "طراحی لوگو",
                "ریاضیات",
              ].map((label: string, index: number) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => {
                      const update = [...categoriesActiveButtons];
                      update[index] = !update[index];
                      setCategoriesActiveButtons(update);
                    }}
                    className={`text-xs px-3 py-2 rounded-xl dark:text-white transition-all duration-300 ${
                      categoriesActiveButtons[index]
                        ? "bg-primaryBlueColor text-white"
                        : "bg-[#F4F3FD] dark:bg-secondaryLightColor text-secondaryLightColor"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Range Slider */}
          <div className="w-full flex flex-col gap-y-3.5">
            <p className="text-primaryBlackColor dark:text-white">قیمت</p>

            <div className="relative h-0.5 bg-secondaryLightColor dark:bg-secondaryDarkColor rounded">
              <div
                className="absolute h-0.5 bg-primaryBlueColor rounded"
                style={{
                  right: `${(minVal / max) * 100}%`,
                  left: `${100 - (maxVal / max) * 100}%`,
                }}
              />

              <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(e) =>
                  setMinVal(Math.min(Number(e.target.value), maxVal - 1))
                }
                className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none light-range-webkit-input
              light-range-moz-input dark:dark-range-webkit-input dark:dark-range-moz-input
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-moz-range-thumb]:appearance-none
                [&::-moz-range-thumb]:pointer-events-auto
                "
                style={{ zIndex: minVal > max - 10 ? 5 : 1 }}
              />

              <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(e) =>
                  setMaxVal(Math.max(Number(e.target.value), minVal + 1))
                }
                className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none light-range-webkit-input
              light-range-moz-input dark:dark-range-webkit-input dark:dark-range-moz-input
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:pointer-events-auto
                [&::-moz-range-thumb]:appearance-none
                [&::-moz-range-thumb]:pointer-events-auto
                "
                style={{ zIndex: maxVal < min + 10 ? 5 : 1 }}
              />

              <motion.div
                key={minVal}
                className="absolute -bottom-8 text-sm font-bold text-primaryBlackColor dark:text-white w-16"
                style={{
                  right: `calc(${(minVal / max) * 92}%)`,
                  transform: "translateX(50%)",
                }}
                animate={{ y: [5, 0] }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {minVal} هزار
              </motion.div>

              <motion.div
                key={maxVal}
                className="absolute -bottom-8 -right-10 text-sm font-bold text-primaryBlackColor dark:text-white w-16"
                style={{
                  right: `calc(${(maxVal / max) * 92}%)`,
                  transform: "translateX(50%)",
                }}
                animate={{ y: [5, 0] }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {maxVal} هزار
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-y-3.5">
            <p className="text-primaryBlackColor dark:text-white">مدت زمان</p>

            <div className="flex items-center gap-3 flex-wrap w-10/12">
              {[
                "3-8 ساعت",
                "8-14 ساعت",
                "14-20 ساعت",
                "20-24 ساعت",
                "24-30 ساعت",
                "+30 ساعت",
              ].map((label: string, index: number) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => {
                      setDurationActive((prev) =>
                        prev === index ? null : index
                      );
                    }}
                    className={`text-xs px-3 py-2 rounded-xl dark:text-white transition-all duration-300 ${
                      durationActive === index
                        ? "bg-primaryBlueColor text-white"
                        : "bg-[#F4F3FD] dark:bg-secondaryLightColor text-secondaryLightColor"
                    }`}
                  >
                    {toPersianNumber(label)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <button
              className="text-primaryBlueColor px-5 py-3.5 rounded-xl border border-primaryBlueColor
            dark:text-white dark:bg-secondaryLightColor"
              onClick={() => {
                setCategoriesActiveButtons((prev) => prev.map(() => false));
                setDurationActive(null);
                setMinVal(100);
                setMaxVal(500);
              }}
            >
              پاک کردن
            </button>

            <button
              className="flex-grow py-3.5 bg-primaryBlueColor text-white rounded-xl"
              onClick={() => {
                setCategoriesActiveButtons((prev) => prev.map(() => false));
                setDurationActive(null);
                setMinVal(100);
                setMaxVal(500);
                setShowOverlay(false);
                setShowSearchFilter(false);
              }}
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchFilter;
