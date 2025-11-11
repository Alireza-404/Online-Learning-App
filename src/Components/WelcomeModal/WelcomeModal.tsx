import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../Redux/Store";
import { UpdateStatus } from "../../Redux/Slices/UserStatus";

const WelcomeModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="h-screen overflow-hidden bg-primaryBlackColor/50 relative">
      <div
        className="welcome-modal w-[295px] h-[310px] px-4 py-9 bg-white dark:bg-blackColor absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2 rounded-xl flex flex-col gap-y-3.5 items-center justify-center"
      >
        <div className="flex flex-col items-center gap-y-2">
          <img
            src="/Images/CircleCheckImage/CircleCheckImage.png"
            alt="Circle-Check-Image"
            className="w-16 h-16"
          />
          <p className="font-bold text-primaryBlackColor dark:text-primaryWhiteColor">
            موفقیت
          </p>
        </div>

        <p className="text-secondaryLightColor dark:text-secondaryDarkColor text-xs text-center">
          تبریک می‌گویم، ثبت نام شما تکمیل شد!
        </p>

        <button
          type="button"
          onClick={() => {
            dispatch(UpdateStatus(null));
          }}
          className="bg-primaryBlueColor text-white rounded-xl w-full py-3.5"
        >
          انجام شد
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
