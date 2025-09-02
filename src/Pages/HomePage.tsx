import { useSelector } from "react-redux";
import type { RootState } from "../Redux/Store";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeScreen from "../Components/WelcomeScreen/WelcomeScreen";
import SignupScreen from "../Components/SignupScreen/SignupScreen";
import LoginScreen from "../Components/LoginScreen/LoginScreen";
import PhoneScreen from "../Components/PhoneScreen/PhoneScreen";
import MessageScreen from "../Components/MessageScreen/MessageScreen";
import WelcomeModal from "../Components/WelcomeModal/WelcomeModal";
import Navbar from "../Components/Navbar/Navbar";
import { toPersianNumber } from "../Utils/ToPersianNumber";
import CircularProgress from "../Components/CircularProgress/CircularProgress";

const HomePage = () => {
  const userStatus = useSelector((state: RootState) => state.userStatus.status);

  const showStatus = () => {
    if (userStatus === "Welcome") {
      return <WelcomeScreen />;
    } else if (userStatus === "Signup") {
      return <SignupScreen />;
    } else if (userStatus === "Login") {
      return <LoginScreen />;
    } else if (userStatus === "Phone") {
      return <PhoneScreen />;
    } else if (userStatus === "Message") {
      return <MessageScreen />;
    } else if (userStatus === "Modal") {
      return <WelcomeModal />;
    }
    return null;
  };

  const learnedTodayWidth = (46 / 60) * 100;

  return (
    <div className="h-full w-full bg-white dark:bg-primaryBlackColor overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={userStatus}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          {showStatus() ? (
            showStatus()
          ) : (
            <div className="min-h-screen bg-white dark:bg-primaryBlackColor pb-[85px]">
              <div className="bg-white dark:bg-primaryBlackColor">
                <div className="h-[183px] flex flex-col justify-center bg-primaryBlueColor px-5 relative">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-y-2">
                      <p className="text-2xl text-white font-bold">
                        سلام، علیرضا
                      </p>

                      <p className="text-sm text-white">
                        بیا شروع به یادگیری کنیم
                      </p>
                    </div>

                    <img
                      src="./public/Images/HomeImages/Avatar.png"
                      alt="Avatar-For-User"
                    />
                  </div>

                  <div
                    className="bg-white dark:bg-blackColor h-24 w-11/12 absolute bottom-0 -translate-x-1/2 left-1/2
                    rounded-xl translate-y-1/2 shadow-lg dark:shadow-white/10 px-4 py-5 flex flex-col gap-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-secondaryLightColor dark:text-secondaryDarkColor">
                        امروز یاد گرفت
                      </p>
                      <p className="text-xs text-primaryBlueColor">
                        دوره های من
                      </p>
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <p
                        className="text-[10px] text-secondaryLightColor dark:text-secondaryDarkColor
                      flex items-center gap-x-1"
                      >
                        <span className="text-xl text-primaryBlackColor dark:text-white">
                          {toPersianNumber(46)} دقیقه
                        </span>
                        / {toPersianNumber(60)} دقیقه
                      </p>

                      <div className="bg-[#F4F3FD] dark:bg-[#EAEAFF] h-1.5 w-full rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-[#FF5106] to-white`}
                          style={{ width: `${learnedTodayWidth}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="w-11/12 flex items-center gap-x-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory
                  mt-20 mx-auto select-none scroll-hide rounded-xl overflow-hidden"
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src="./public/Images/HomeImages/SlideImage.png"
                      alt="Slide-Image-1"
                      draggable={false}
                    />

                    <p className="font-bold text-primaryBlackColor absolute top-4 left-1/2 -translate-x-1/2 w-52">
                      می‌خواهید چه چیزی یاد بگیرید؟
                    </p>
                    <button
                      type="button"
                      className="bg-[#FF6905] text-primaryWhiteColor rounded-md px-2 py-1 absolute bottom-5 left-5"
                    >
                      شروع کنید
                    </button>
                  </div>

                  <img
                    src="./public/Images/HomeImages/SlideImage.png"
                    alt="Slide-Image-2"
                    draggable={false}
                  />
                </div>

                <div className="flex flex-col gap-y-2 mt-9">
                  <p className="font-bold text-primaryBlackColor dark:text-white w-11/12 mx-auto">
                    طرح یادگیری
                  </p>

                  <div
                    className="w-11/12 h-32 mx-auto shadow-lg dark:shadow-white/10 bg-white dark:bg-blackColor py-5 
                    px-4 rounded-xl flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-primaryBlackColor dark:text-white">
                        طراحی بسته‌بندی
                      </p>

                      <CircularProgress value={40} max={48} />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-primaryBlackColor dark:text-white">
                        طراحی محصول
                      </p>

                      <CircularProgress value={6} max={24} />
                    </div>

                    <p className="text-primaryBlueColor text-center">بیشتر</p>
                  </div>
                </div>

                <div
                  className="w-11/12 h-32 mx-auto mt-10 bg-pink-200/70 dark:bg-pink-200 rounded-xl shadow-lg dark:shadow-white/10
                relative"
                >
                  <img
                    src="./public/Images/HomeImages/HomeEndImages/Ellipse_75.png"
                    alt="Ellips-Image"
                    className="absolute left-5 top-1/2 -translate-y-1/2"
                  />
                  <img
                    src="./public/Images/HomeImages/HomeEndImages/Ellipse_76.png"
                    alt="Ellips-Image"
                    className="absolute left-8 top-1/2 -translate-y-1/2"
                  />

                  <img
                    src="./public/Images/HomeImages/HomeEndImages/Avatar-1.png"
                    alt="Avatar-Image-1"
                    className="absolute left-10 top-5"
                  />

                  <img
                    src="./public/Images/HomeImages/HomeEndImages/Avatar-2.png"
                    alt="Avatar-Image-2"
                    className="absolute left-8 top-[50px]"
                  />

                  <img
                    src="./public/Images/HomeImages/HomeEndImages/Avatar-3.png"
                    alt="Avatar-Image-3"
                    className="absolute left-[68px] top-12"
                  />

                  <div className="absolute top-1/2 right-5 -translate-y-1/2 flex flex-col gap-y-1.5">
                    <p className="font-bold text-[23px] text-[#440687]">
                      گردهمایی
                    </p>

                    <p className="text-xs text-[#440687]">
                      تبادل آفلاین تجربیات یادگیری
                    </p>
                  </div>
                </div>
              </div>

              <Navbar />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
