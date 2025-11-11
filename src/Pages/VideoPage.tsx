import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { toPersianNumber } from "../Utils/ToPersianNumber";
import CustomVideoPlayer from "../Components/CustomVideoPlayer/CustomVideoPlayer";
import NotFoundPage from "./NotFoundPage";

const VideoPage = () => {
  const { videoId } = useParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [playedVideo, setPlayedVideo] = useState<number | null>(null);
  const [desiredVideoSrc, setDesiredVideoSrc] = useState<string | null>(null);
  const [isStarTrue, setIsStarTrue] = useState<boolean>(false);
  const [clickOnPlayBtn, setClickOnPlayBtn] = useState<boolean>(false);
  const [playOrPause, setPlayOrPause] = useState<"Play" | "Pause">("Pause");

  const courses: Record<string, any[]> = {
    "product-design": [
      {
        id: 1,
        name: "طراحی محصول نسخه 1/0",
        title: "به دوره خوش آمدید",
        duration: "6:10",
        part: "01",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
        description: `در این دوره فرآیند طراحی محصول از مرحله ایده‌پردازی و تحقیقات کاربر تا ساخت نمونه اولیه 
        (MVP) آموزش داده می‌شود. موضوعاتی مثل شناخت نیاز کاربران، طراحی تجربه کاربری (UX)، طراحی رابط کاربری 
        (UI)، تست اولیه محصول و بهینه‌سازی نسخه اول پوشش داده می‌شوند. این دوره
         برای افرادی که می‌خواهند ایده‌های خود را به یک محصول واقعی و کارآمد تبدیل کنند بسیار مفید است.`,
        price: "190",
      },

      {
        id: 2,
        name: "طراحی محصول نسخه 1/0",
        title: "نمای کلی فرآیند",
        duration: "8:30",
        part: "02",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 3,
        name: "طراحی محصول نسخه 1/0",
        title: "سوال های شما درباره این دوره",
        duration: "11:00",
        part: "03",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 4,
        name: "طراحی محصول نسخه 1/0",
        title: "نحوه کار با برنامه طراحی محصول",
        duration: "10:13",
        part: "04",
        isLocked: true,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 5,
        name: "طراحی محصول نسخه 1/0",
        title: "ابزار های کاربردی",
        duration: "4:53",
        part: "05",
        isLocked: true,
        src: "/Videos/CurrentVideo.mp4",
      },
    ],

    "logo-design": [
      {
        id: 1,
        name: "طراحی لوگو",
        title: "به دوره خوش آمدید",
        duration: "3:10",
        part: "01",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
        description: `این دوره به شما می‌آموزد چگونه با استفاده از 
        اصول طراحی گرافیک، رنگ‌شناسی و تایپوگرافی، یک لوگوی حرفه‌ای و منحصربه‌فرد خلق کنید. 
        از شناخت برند و ارزش‌های آن شروع می‌کنیم و سپس تکنیک‌های ایده‌پردازی، طراحی اسکچ، 
        اجرای دیجیتال و آماده‌سازی لوگو برای کاربردهای مختلف (وب، چاپ و شبکه‌های اجتماعی) 
        را بررسی می‌کنیم. در پایان دوره شما توانایی طراحی لوگوهای کاربردی و جذاب را خواهید داشت.`,
        price: "600",
      },

      {
        id: 2,
        name: "طراحی لوگو",
        title: "نمای کلی فرآیند",
        duration: "5:50",
        part: "02",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 3,
        name: "طراحی لوگو",
        title: "سوال های شما درباره این دوره",
        duration: "9:00",
        part: "03",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 4,
        name: "طراحی لوگو",
        title: "نحوه کار با دو برنامه معروف طراحی لوگو",
        duration: "15:25",
        part: "04",
        isLocked: true,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 5,
        name: "طراحی لوگو",
        title: "ابزار های کاربردی طراحی لوگو",
        duration: "6:00",
        part: "05",
        isLocked: true,
        src: "/Videos/CurrentVideo.mp4",
      },
    ],

    javascript: [
      {
        id: 1,
        name: "جاوا اسکریپت مقدماتی تا پیشرفته",
        title: "به دوره خوش آمدید",
        duration: "5:35",
        part: "01",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
        description: `این دوره با تمرکز بر مفاهیم اصلی و کاربردی جاوااسکریپت طراحی 
        شده است. از مبانی اولیه مثل متغیرها، شرط‌ها و حلقه‌ها شروع می‌کنیم و به مباحث پیشرفته‌تر مثل DOM، رویدادها 
        (Events)، فانکشن‌ها و async/await می‌پردازیم. هدف دوره این است که شما را برای پیاده‌سازی پروژه‌های
         واقعی وب آماده کند و پایه محکمی برای ورود به دنیای فریم‌ورک‌های مدرن مثل React و Vue بسازد.`,
        price: "950",
      },

      {
        id: 2,
        name: "جاوا اسکریپت مقدماتی تا پیشرفته",
        title: "جاوا اسکریپت چیست؟",
        duration: "6:12",
        part: "02",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 3,
        name: "جاوا اسکریپت مقدماتی تا پیشرفته",
        title: "سوال های شما درباره این دوره",
        duration: "8:30",
        part: "03",
        isLocked: false,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 4,
        name: "جاوا اسکریپت مقدماتی تا پیشرفته",
        title: "مفاهیم اولیه و ساخت سند",
        duration: "11:25",
        part: "04",
        isLocked: true,
        src: "/Videos/CurrentVideo.mp4",
      },

      {
        id: 5,
        name: "جاوا اسکریپت مقدماتی تا پیشرفته",
        title: "انواع متغیر ها",
        duration: "7:29",
        part: "05",
        isLocked: true,
        src: "/Videos/CurrentVideo.mp4",
      },
    ],
  };

  const selectedCourse = videoId ? courses[videoId] : null;

  const showVideoHandler = (id: number, src: string) => {
    if (playOrPause === "Play") {
      setPlayedVideo(id);
      setPlayOrPause("Pause");
    } else {
      setPlayedVideo(id);
      setDesiredVideoSrc(src);
      setPlayOrPause("Play");
    }
    setClickOnPlayBtn(true);
  };

  return (
    <div className="h-screen bg-white dark:bg-primaryBlackColor">
      <AnimatePresence>
        <motion.div
          key={"VideoPage"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          {selectedCourse ? (
            <div
              className={`${
                !clickOnPlayBtn ? "bg-[#FFE7EE]" : "bg-black/95"
              } h-screen flex flex-col`}
            >
              {desiredVideoSrc ? (
                <div
                  className={`h-72 relative ${
                    clickOnPlayBtn ? "px-0 bg-black/95" : "px-5 bg-[#FFE7EE]"
                  }`}
                >
                  <i
                    className={`bi bi-chevron-right text-xl absolute right-5 top-7 z-40 ${
                      clickOnPlayBtn
                        ? "text-primaryBlueColor"
                        : "text-primaryBlackColor dark:text-white"
                    }`}
                    onClick={() => history.back()}
                  ></i>

                  <CustomVideoPlayer
                    src={desiredVideoSrc}
                    id={playedVideo}
                    playOrPause={playOrPause}
                    setPlayOrPause={setPlayOrPause}
                  />
                </div>
              ) : (
                <div className="bg-[#FFE7EE] h-72 relative px-5">
                  <i
                    className="bi bi-chevron-right text-xl absolute right-5 top-7 text-primaryBlackColor"
                    onClick={() => history.back()}
                  ></i>

                  <div className="relative w-fit mt-20 z-20">
                    <img
                      src="/Images/VideoPageImages/Arrow.png"
                      alt="Arrow-Image"
                      className="rotate-180"
                    />

                    <p
                      className="w-full text-center text-xs text-primaryBlackColor absolute left-1/2 top-1/2 
                  -translate-x-1/2 -translate-y-1/2"
                    >
                      کامل و جامع
                    </p>
                  </div>

                  <p className="text-primaryBlackColor font-bold text-xl w-56 mt-5 absolute z-20">
                    {toPersianNumber(selectedCourse[0].name)}
                  </p>

                  <img
                    src="/Images/VideoPageImages/PaperRocket.png"
                    alt="Paper-Rocket"
                    className="absolute top-1/2 -translate-y-1/2 z-0"
                  />

                  <img
                    src="/Images/VideoPageImages/HeaderImage.png"
                    alt="Paper-Rocket"
                    className="absolute bottom-0 left-7"
                  />
                </div>
              )}

              <div
                className="flex-grow overflow-y-auto bg-white dark:bg-primaryBlackColor rounded-t-3xl pt-8 px-5
                pb-32"
              >
                <div className="flex flex-col gap-y-6">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-y-1.5">
                      <p className="text-primaryBlackColor dark:text-white font-bold text-xl w-56">
                        {selectedCourse[0].name}
                      </p>
                      <p className="text-xs text-secondaryLightColor dark:text-secondaryDarkColor">
                        {toPersianNumber(6)} ساعت و {toPersianNumber(14)} دقیقه
                        . {toPersianNumber(24)} درس
                      </p>
                    </div>

                    <span className="text-primaryBlueColor font-bold text-xl">
                      {toPersianNumber(selectedCourse[0].price)} تومان
                    </span>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <div>
                      <p className="text-primaryBlackColor dark:text-white font-bold">
                        درباره این دوره
                      </p>

                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 43 }}
                        className="overflow-hidden"
                      >
                        <p className="text-secondaryLightColor dark:text-secondaryDarkColor text-xs leading-5">
                          {selectedCourse[0].description}
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex justify-center">
                      <i
                        className={`bi bi-chevron-left h-5 w-5 flex items-center justify-center transition-all
                          duration-300 text-primaryBlackColor dark:text-white ${
                            isOpen ? "rotate-90" : "-rotate-90"
                          }`}
                        onClick={() => setIsOpen((prev) => !prev)}
                      ></i>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-6">
                    {selectedCourse.map((course) => {
                      return (
                        <div
                          className="flex items-center gap-x-8"
                          key={course.id}
                        >
                          <p className="text-secondaryLightColor dark:text-secondaryDarkColor text-2xl">
                            {toPersianNumber(course.part)}
                          </p>

                          <div className="flex justify-between flex-grow">
                            <div className="flex flex-col gap-y-2">
                              <p className="text-primaryBlackColor dark:text-white text-sm">
                                {course.title}
                              </p>

                              <span
                                className={`text-xs ${
                                  playedVideo === course.id
                                    ? "text-primaryBlueColor"
                                    : "text-secondaryLightColor dark:text-secondaryDarkColor"
                                }`}
                              >
                                {toPersianNumber(course.duration)} دقیقه
                              </span>
                            </div>

                            <i
                              className={`${
                                playedVideo === course.id &&
                                playOrPause === "Play"
                                  ? "bi bi-pause-fill"
                                  : "bi bi-play-fill"
                              } bg-primaryBlueColor w-11 rounded-full items-center justify-center
                              text-xl text-white ${
                                course.isLocked ? "hidden" : "flex"
                              }`}
                              onClick={() =>
                                showVideoHandler(course.id, course.src)
                              }
                            ></i>

                            <i
                              className={`bi bi-lock bg-primaryBlueColor/50 w-11 rounded-full items-center
                               justify-center text-xl text-white ${
                                 course.isLocked ? "flex" : "hidden"
                               }`}
                            ></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="flex items-center gap-x-3.5 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 w-full pb-8
                bg-white dark:bg-primaryBlackColor"
                >
                  <button
                    type="button"
                    className="bg-[#FFEBF0] rounded-xl w-24 h-[60px]"
                    onClick={() => setIsStarTrue((prev) => !prev)}
                  >
                    <i
                      className={`text-[#FF6905] text-2xl ${
                        isStarTrue
                          ? "bi bi-star-fill transition-all"
                          : "bi bi-star transition-all"
                      }`}
                    ></i>
                  </button>
                  <button
                    type="button"
                    className="flex-grow bg-primaryBlueColor py-3.5 rounded-xl h-[60px] text-white"
                  >
                    اکنون بخرید
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <NotFoundPage />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VideoPage;
