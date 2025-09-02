import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { toPersianNumber } from "../Utils/ToPersianNumber";

interface NotifInterface {
  id: number;
  title: string;
  time: string;
  icon: string;
  iconColor: string;
  bg: string;
}

interface MessageInterface {
  id: number;
  name: string;
  message: string;
  imgBg?: string;
  status: string;
  time: string;
}

const NotificationsPage = () => {
  const [userStatus, setUserStatus] = useState<"Message" | "Notifications">(
    "Message"
  );
  const notificationsArray: NotifInterface[] = [
    {
      id: 1,
      title: "خرید موفق!",
      time: "همین الان",
      icon: "bi bi-credit-card-fill",
      iconColor: "#FF6905",
      bg: "#FFEBF0",
    },

    {
      id: 2,
      title: "تبریک میگم که امتحان رو تموم کردی...",
      time: "همین الان",
      icon: "bi bi-chat-text-fill",
      iconColor: "primaryBlueColor",
      bg: "#EAEAFF",
    },

    {
      id: 3,
      title: "دوره شما به‌روزرسانی شده است، شما...",
      time: "همین الان",
      icon: "bi bi-chat-text-fill",
      iconColor: "primaryBlueColor",
      bg: "#EAEAFF",
    },

    {
      id: 4,
      title: "تبریک می‌گویم، شما ...",
      time: "همین الان",
      icon: "bi bi-chat-text-fill",
      iconColor: "primaryBlueColor",
      bg: "#EAEAFF",
    },
  ];

  const messageArray: MessageInterface[] = [
    {
      id: 1,
      name: "ایلیا معیل",
      message:
        "سلام علیرضا . لوگویی که می گفتی برای سایت شخصی خودت بزنم تقریبا در حال اتمام است . فردا بهت تحویل می دم ✌️",
      status: "آنلاین",
      time: "01:29 pm",
    },

    {
      id: 2,
      name: "شهریار حسینی",
      message:
        "سلام دوست خوبم. برای سایت شخصی خودت کمک نیاز نداری؟ اگر کمک خواستی من هستم 😄",
      imgBg: "#FFE7EE",
      status: "آفلاین",
      time: "08:02 am",
    },
  ];

  return (
    <div className="h-full w-full bg-white dark:bg-primaryBlackColor overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={"NotificationsPage"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <div className="h-screen overflow-y-auto bg-white dark:bg-primaryBlackColor pb-[85px] px-5">
            <p className="text-2xl font-bold text-primaryBlackColor dark:text-white mt-10">
              اطلاعیه ها
            </p>

            <div className="flex items-start justify-center gap-x-16 mt-5">
              <div
                className="flex flex-col items-center gap-y-2 cursor-pointer"
                onClick={() => setUserStatus("Message")}
              >
                <p className="text-primaryBlackColor dark:text-white">
                  پیام ها
                </p>

                <span
                  className={`${
                    userStatus === "Message" ? "block" : "hidden"
                  } h-0.5 w-11 bg-primaryBlueColor`}
                ></span>
              </div>

              <div
                className="flex flex-col items-center gap-y-2 cursor-pointer"
                onClick={() => setUserStatus("Notifications")}
              >
                <p className="text-primaryBlackColor dark:text-white">
                  اطلاعیه ها
                </p>

                <span
                  className={`${
                    userStatus === "Notifications" ? "block" : "hidden"
                  } h-0.5 w-11 bg-primaryBlueColor`}
                ></span>
              </div>
            </div>

            {userStatus === "Notifications" ? (
              <motion.div
                key={"Notifications"}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="mt-6 flex flex-col gap-y-4"
              >
                {notificationsArray.map((notif) => (
                  <div
                    className="bg-white dark:bg-blackColor shadow-lg dark:shadow-white/10 px-5 py-4 rounded-xl
                  flex gap-x-4 select-none"
                    key={notif.id}
                  >
                    <div
                      className={`bg-[${notif.bg}] rounded-xl py-2.5 px-3.5`}
                    >
                      <i
                        className={`${notif.icon} ${
                          notif.id === 1
                            ? `text-[${notif.iconColor}]`
                            : `text-${notif.iconColor}`
                        } text-xl leading-none`}
                      ></i>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <p className="text-primaryBlackColor dark:text-white text-xs">
                        {notif.title}
                      </p>

                      <p
                        className="text-xs text-secondaryLightColor dark:text-secondaryDarkColor flex items-center
                      gap-x-1.5"
                      >
                        <i className="bi bi-clock-history"></i>
                        {notif.time}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={"Message"}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="mt-6 flex flex-col gap-y-4"
              >
                {messageArray.map((message) => (
                  <div
                    key={message.id}
                    className="bg-white dark:bg-blackColor shadow-lg dark:shadow-white/10 px-5 py-4 rounded-xl flex
                  flex-col gap-y-3.5 select-none"
                  >
                    <div className="flex items-center gap-x-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-[#D8FFEF]`}
                      ></div>

                      <div className="flex items-start justify-between grow">
                        <div className="flex flex-col gap-y-1.5">
                          <span className="text-primaryBlackColor dark:text-white text-xs">
                            {message.name}
                          </span>

                          <span className="text-secondaryLightColor dark:text-secondaryDarkColor font-bold text-xs">
                            {message.status}
                          </span>
                        </div>

                        <span
                          className="text-secondaryLightColor dark:text-secondaryDarkColor text-xs"
                          dir="ltr"
                        >
                          {toPersianNumber(message.time)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-3.5">
                      <p className="text-xs text-secondaryLightColor dark:text-secondaryDarkColor">
                        {message.message}
                      </p>

                      {message.imgBg && (
                        <div
                          className={`w-full h-36 rounded-xl bg-[${message.imgBg}]`}
                        ></div>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            <Navbar />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NotificationsPage;
