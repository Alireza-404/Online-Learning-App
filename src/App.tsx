import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import HomePage from "./Pages/HomePage";
import CoursePage from "./Pages/CoursePage";
import VideoPage from "./Pages/VideoPage";
import AccountPage from "./Pages/AccountPage";
import NotificationsPage from "./Pages/NotificationsPage";
import AccountOptionsPage from "./Pages/AccountOptionsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ParticlesConfig from "./Components/ParticlesConfig/ParticlesConfig";

function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const getThemeFromLocalStorage = localStorage.getItem("LearningSiteTheme");
    const getTheme = getThemeFromLocalStorage
      ? JSON.parse(getThemeFromLocalStorage)
      : 0;

    if (getTheme === 0) {
      window.document.documentElement.classList.remove("dark");
    } else {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <div className="primary-element">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/course/:videoId" element={<VideoPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route
              path="/account/:optionsId"
              element={<AccountOptionsPage />}
            />
            <Route path="/message" element={<NotificationsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div
        className="desktop-element relative h-screen w-screen items-center justify-center overflow-hidden
      bg-white dark:bg-primaryBlackColor"
      >
        <ParticlesConfig className="fixed inset-0 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-50 w-[480px] rounded-2xl p-6
          bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30 
          flex flex-col items-center gap-y-4"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
            <Smartphone className="text-white w-8 h-8" />
          </div>

          <p className="font-extrabold text-3xl text-primaryBlackColor dark:text-white text-center">
            فقط در موبایل!
          </p>

          <p className="text-center text-sm text-primaryBlackColor/80 dark:text-white/80 leading-6">
            این پلتفرم برای تجربه‌ای بهتر طراحی شده تا روی{" "}
            <span className="font-semibold text-blue-600 dark:text-cyan-400">
              گوشی موبایل
            </span>{" "}
            استفاده بشه. لطفاً با موبایل وارد بشید تا همه قابلیت‌ها و طراحی رو
            کامل تجربه کنید ✨
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-6 py-2 rounded-full text-white font-medium shadow-lg cursor-pointer
            bg-gradient-to-r from-blue-500 to-cyan-500"
            onClick={() => setIsClicked(true)}
          >
            {isClicked ? "آفرین 😊" : "فهمیدم 😎"}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
