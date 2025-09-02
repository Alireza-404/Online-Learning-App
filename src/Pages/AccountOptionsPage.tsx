import { AnimatePresence, motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";

const AccountOptionsPage = () => {
  const { optionsId } = useParams();
  const [activeTheme, setActiveTheme] = useState<number>(0);
  const root = window.document.documentElement;

  useEffect(() => {
    const getThemeFromLocalStorage = localStorage.getItem("LearningSiteTheme");
    const getTheme = getThemeFromLocalStorage
      ? JSON.parse(getThemeFromLocalStorage)
      : 0;
    setActiveTheme(getTheme);

    if (getTheme === 0) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, []);

  const renderContent = () => {
    switch (optionsId) {
      case "setting-privacy": {
        return (
          <div className="px-5 relative">
            <Link to={"/account"}>
              <i className="bi bi-chevron-right text-xl absolute right-5 top-7 text-primaryBlackColor dark:text-white"></i>
            </Link>

            <p className="text-primaryBlackColor dark:text-white font-bold text-2xl pt-20">
              تنظیمات و حریم خصوصی
            </p>

            <div className="mt-10">
              <div
                className="flex items-center justify-between bg-white dark:bg-blackColor shadow-lg
              dark:shadow-white/10 px-5 py-3.5 rounded-xl"
              >
                <p className="text-sm text-primaryBlackColor dark:text-white">
                  زمینه
                </p>

                <div className="flex items-center gap-x-2.5">
                  {["روشن", "تیره"].map((label: string, index: number) => (
                    <button
                      type="button"
                      key={index}
                      className={`rounded-md w-14 py-1 text-sm ${
                        index === activeTheme
                          ? "bg-primaryBlueColor text-white"
                          : "bg-white text-primaryBlackColor dark:bg-blackColor dark:text-white shadow dark:shadow-white/10"
                      }`}
                      onClick={() => {
                        setActiveTheme(index);
                        localStorage.setItem(
                          "LearningSiteTheme",
                          JSON.stringify(index)
                        );

                        if (index === 0) {
                          root.classList.remove("dark");
                        } else {
                          root.classList.add("dark");
                        }
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }
      default: {
        return <NotFoundPage />;
      }
    }
  };

  return (
    <div className="h-full w-full bg-white dark:bg-primaryBlackColor overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={"SettingAndPrivacy"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <div className="h-screen overflow-y-auto bg-white dark:bg-primaryBlackColor pb-[85px]">
            {renderContent()}

            <Navbar />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AccountOptionsPage;
