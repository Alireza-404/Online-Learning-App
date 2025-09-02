import { Link } from "react-router-dom";
import ParticlesConfig from "../Components/ParticlesConfig/ParticlesConfig";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../Redux/Store";
import { UpdateStatus } from "../Redux/Slices/UserStatus";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white dark:bg-primaryBlackColor h-screen overflow-hidden relative">
      <ParticlesConfig className="fixed inset-0 z-0" />

      <div className="flex justify-center items-center h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-50 dark:bg-blackColor rounded-2xl shadow-lg
          w-[360px] p-6 flex flex-col items-center gap-y-4 text-center border border-gray-200 dark:border-gray-800"
        >
          <div className="bg-gradient-to-r from-primaryBlueColor to-[#ff6905] px-4 py-3.5 rounded-full shadow-md">
            <i className="bi bi-emoji-frown text-white text-3xl leading-none"></i>
          </div>

          <h1 className="text-primaryBlackColor dark:text-white font-extrabold text-xl">
            اوه نه! صفحه پیدا نشد 😅
          </h1>

          <p className="text-secondaryLightColor dark:text-secondaryDarkColor text-sm leading-relaxed">
            انگار این مسیر وجود نداره... بیا برگردیم به صفحه اصلی :)
          </p>

          <Link
            to={"/"}
            onClick={() => dispatch(UpdateStatus(null))}
            className="bg-gradient-to-r from-primaryBlueColor to-[#ff6905] 
          text-white font-medium px-8 py-2 rounded-xl shadow-md hover:shadow-lg
          transition-all duration-300 transform hover:scale-105"
          >
            بازگشت به خانه
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
