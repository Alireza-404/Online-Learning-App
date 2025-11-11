import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const AccountPage = () => {
  return (
    <div className="h-full w-full bg-white dark:bg-primaryBlackColor overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={"AccountPage"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <div className="h-screen overflow-y-auto bg-white dark:bg-primaryBlackColor pb-[85px]">
            <div className="px-5">
              <p className="font-bold text-primaryBlackColor dark:text-white text-2xl mt-10">
                حساب
              </p>

              <img
                src="/Images/AccountPageImages/Avatar.png"
                alt="Avatar-Image"
                className="block mx-auto mt-6"
              />

              <div className="flex flex-col gap-y-7 mt-8">
                <div className="flex items-center justify-between">
                  <p className="text-primaryBlackColor dark:text-white">
                    مورد علاقه
                  </p>

                  <i className="bi bi-chevron-left text-secondaryLightColor dark:text-secondaryDarkColor"></i>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-primaryBlackColor dark:text-white">
                    ویرایش حساب
                  </p>

                  <i className="bi bi-chevron-left text-secondaryLightColor dark:text-secondaryDarkColor"></i>
                </div>

                <Link
                  to={"/account/setting-privacy"}
                  className="flex items-center justify-between"
                >
                  <p className="text-primaryBlackColor dark:text-white">
                    تنظیمات و حریم خصوصی
                  </p>

                  <i className="bi bi-chevron-left text-secondaryLightColor dark:text-secondaryDarkColor"></i>
                </Link>

                <div className="flex items-center justify-between">
                  <p className="text-primaryBlackColor dark:text-white">کمک</p>

                  <i className="bi bi-chevron-left text-secondaryLightColor dark:text-secondaryDarkColor"></i>
                </div>
              </div>
            </div>

            <Navbar />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AccountPage;
