import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
  AppendToCodeMessageField,
  UpdateBooleanField,
  UpdateStringField,
} from "../../Redux/Slices/Fields";
import { useEffect } from "react";
import { toPersianNumber } from "../../Utils/ToPersianNumber";
import { persianPhoneNumber } from "../../Utils/PersianPhoneNumber";
import { UpdateStatus } from "../../Redux/Slices/UserStatus";

const MessageScreen = () => {
  const field = useSelector((state: RootState) => state.fields);
  const dispatch = useDispatch<AppDispatch>();

  const otpInputOnChangeHandler = (otp: string) => {
    dispatch(UpdateStringField({ name: "codeMessage", value: otp }));
  };

  useEffect(() => {
    if (field.codeMessage.length === 4) {
      dispatch(UpdateBooleanField({ name: "isCodeMessageTrue", value: true }));
    } else {
      dispatch(UpdateBooleanField({ name: "isCodeMessageTrue", value: false }));
    }
  }, [field.codeMessage]);

  return (
    <div className="h-screen overflow-hidden bg-white dark:bg-primaryBlackColor flex flex-col justify-between">
      <div className="flex flex-col flex-grow justify-between py-12">
        <div className="relative">
          <p className="text-lg font-bold text-primaryBlackColor dark:text-primaryWhiteColor text-center">
            با تلفن ادامه دهید
          </p>
          <i
            className="bi bi-x-lg text-xl text-primaryBlackColor dark:text-primaryWhiteColor
            text-center absolute top-1/2 right-4 -translate-y-1/2"
            onClick={() => dispatch(UpdateStatus("Phone"))}
          ></i>
        </div>

        <div className="flex flex-col gap-y-4 px-16" dir="ltr">
          <p className="font-bold text-secondaryLightColor dark:text-secondaryDarkColor text-center">
            کد به {toPersianNumber(persianPhoneNumber(field.phone))} ارسال
            می‌شود
          </p>

          <OtpInput
            value={toPersianNumber(field.codeMessage)}
            onChange={otpInputOnChangeHandler}
            numInputs={4}
            shouldAutoFocus={true}
            containerStyle="justify-between"
            renderInput={(props) => (
              <input
                {...props}
                disabled
                className={`border rounded-xl transition duration-300 !w-14 h-14 text-2xl
                text-primaryBlackColor dark:text-primaryWhiteColor outline-none bg-white dark:bg-inputBg
               ${
                 field.codeMessage.length === 0
                   ? "border-[#B8B8D2] dark:border-[#B8B8D2]/20"
                   : field.isCodeMessageTrue
                   ? "border-primaryBlueColor/85"
                   : "border-red-600/85"
               }`}
              />
            )}
          />
        </div>

        <div className="px-16">
          <button
            type="button"
            className="w-full py-3.5 bg-primaryBlueColor text-white rounded-xl"
            onClick={() => {
              if (field.isCodeMessageTrue) {
                dispatch(UpdateStatus("Modal"));
              }
            }}
          >
            تأیید و ایجاد حساب کاربری
          </button>
        </div>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-3" dir="ltr">
          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("1"))}
          >
            {toPersianNumber(1)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center text-center"
            onClick={() => dispatch(AppendToCodeMessageField("2"))}
          >
            {toPersianNumber(2)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("3"))}
          >
            {toPersianNumber(3)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("4"))}
          >
            {toPersianNumber(4)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("5"))}
          >
            {toPersianNumber(5)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("6"))}
          >
            {toPersianNumber(6)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("7"))}
          >
            {toPersianNumber(7)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("8"))}
          >
            {toPersianNumber(8)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("9"))}
          >
            {toPersianNumber(9)}
          </p>

          <i
            className="bi bi-eraser text-2xl text-red-600 flex items-center justify-center px-12 py-9 "
            onClick={() => {
              const value = field.codeMessage;
              const slicedValue = value.slice(0, -1);
              dispatch(
                UpdateStringField({ name: "codeMessage", value: slicedValue })
              );
            }}
          ></i>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
                     flex items-center justify-center"
            onClick={() => dispatch(AppendToCodeMessageField("0"))}
          >
            {toPersianNumber(0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageScreen;
