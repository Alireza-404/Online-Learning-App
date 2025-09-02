import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import {
  ResetStringField,
  UpdateBooleanField,
  UpdateStringField,
} from "../../Redux/Slices/Fields";
import { toPersianNumber } from "../../Utils/ToPersianNumber";
import { UpdateStatus } from "../../Redux/Slices/UserStatus";

const SignupScreen = () => {
  const field = useSelector((state: RootState) => state.fields);
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setIsClicked(true);

    if (
      field.isEmailForSignupTrue &&
      field.isPasswordForSignupTrue &&
      isChecked
    ) {
      dispatch(UpdateStatus("Phone"));
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#F0F0F2] dark:bg-primaryBlackColor relative flex flex-col">
      <div className="h-40 p-5 bg-[#F0F0F2] dark:bg-primaryBlackColor flex flex-col justify-end">
        <p className="font-bold text-primaryBlackColor dark:text-primaryWhiteColor text-[32px]">
          ثبت نام
        </p>
        <p className="text-secondaryLightColor dark:text-secondaryDarkColor text-xs">
          اطلاعات خود را در زیر وارد کنید و ثبت نام رایگان انجام دهید
        </p>
      </div>

      <div className="flex flex-col flex-grow gap-y-8 px-6 py-8 bg-white dark:bg-blackColor rounded-t-3xl">
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="email-input-for-signup"
            className="text-sm text-secondaryLightColor dark:text-secondaryDarkColor"
          >
            ایمیل شما
          </label>
          <input
            id="email-input-for-signup"
            type="email"
            autoComplete="email"
            name="emailForSignup"
            placeholder="example@gmail.com"
            value={field.emailForSignup}
            onChange={(event) => {
              const value = event.target.value;
              dispatch(UpdateStringField({ name: "emailForSignup", value }));

              const emailRegex = /^([\w.-]+)@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
              dispatch(
                UpdateBooleanField({
                  name: "isEmailForSignupTrue",
                  value: emailRegex.test(value),
                })
              );
            }}
            onInput={(event) => {
              const value = (event.target as HTMLInputElement).value;
              dispatch(UpdateStringField({ name: "emailForSignup", value }));

              const emailRegex = /^([\w.-]+)@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
              dispatch(
                UpdateBooleanField({
                  name: "isEmailForSignupTrue",
                  value: emailRegex.test(value),
                })
              );
            }}
            className={`border px-5 py-3.5 rounded-xl bg-white dark:bg-inputBg text-sm
            text-primaryBlackColor dark:text-primaryWhiteColor outline-none transition duration-300
            ${
              field.emailForSignup.length === 0
                ? "border-[#B8B8D2] dark:border-[#B8B8D2]/20"
                : field.isEmailForSignupTrue
                ? "border-primaryBlueColor/85"
                : "border-red-600/85"
            }`}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="password-input-for-signup"
            className="text-sm text-secondaryLightColor dark:text-secondaryDarkColor"
          >
            رمز عبور
          </label>

          <div className="relative">
            <input
              id="password-input-for-signup"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              name="passwordForSignup"
              placeholder={`حداقل ${toPersianNumber(8)} کاراکتر`}
              value={field.passwordForSignup}
              onChange={(event) => {
                const value = event.target.value;
                dispatch(
                  UpdateStringField({ name: "passwordForSignup", value })
                );

                const passwordRegex = /^[\w+!$.-]{8,16}$/;
                dispatch(
                  UpdateBooleanField({
                    name: "isPasswordForSignupTrue",
                    value: passwordRegex.test(value),
                  })
                );
              }}
              onInput={(event) => {
                const value = (event.target as HTMLInputElement).value;
                dispatch(
                  UpdateStringField({ name: "passwordForSignup", value })
                );

                const passwordRegex = /^[\w+!$.-]{8,16}$/;
                dispatch(
                  UpdateBooleanField({
                    name: "isPasswordForSignupTrue",
                    value: passwordRegex.test(value),
                  })
                );
              }}
              className={`border px-5 py-3.5 rounded-xl transition duration-300 w-full text-sm
            text-primaryBlackColor dark:text-primaryWhiteColor outline-none bg-white dark:bg-inputBg
            ${
              field.passwordForSignup.length === 0
                ? "border-[#B8B8D2] dark:border-[#B8B8D2]/20"
                : field.isPasswordForSignupTrue
                ? "border-primaryBlueColor/85"
                : "border-red-600/85"
            }`}
            />

            <i
              className={`bi bi-eye ${
                showPassword
                  ? "invisible opacity-0"
                  : "visible placeholder-opacity-100"
              } absolute top-1/2 -translate-y-1/2 left-3 text-xl flex text-primaryBlackColor 
             dark:text-primaryWhiteColor transition-all duration-200`}
              onClick={() => setShowPassword(true)}
            ></i>
            <i
              className={`bi bi-eye-slash ${
                showPassword
                  ? "visible placeholder-opacity-100"
                  : "invisible opacity-0"
              } absolute top-1/2 -translate-y-1/2 left-3 text-xl flex text-primaryBlackColor 
             dark:text-primaryWhiteColor transition-all duration-200`}
              onClick={() => setShowPassword(false)}
            ></i>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <button
            type="button"
            className="bg-primaryBlueColor text-primaryWhiteColor font-bold rounded-xl w-full py-3.5"
            onClick={clickHandler}
          >
            ساخت حساب
          </button>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              onChange={(event) => setIsChecked(event.target.checked)}
              className="w-4 h-4"
            />
            <p
              className={`bg-clip-text text-transparent text-xs transition-all duration-500 ${
                !isChecked && isClicked
                  ? "bg-gradient-to-r from-red-600 to-orange-600"
                  : "bg-secondaryLightColor dark:bg-secondaryDarkColor"
              }`}
            >
              با ایجاد یک حساب کاربری، باید با شرایط و ضوابط ما موافقت کنید.
            </p>
          </div>
        </div>

        <p className="text-secondaryLightColor dark:text-secondaryDarkColor text-xs text-center">
          از قبل حساب کاربری دارید؟{" "}
          <span
            className="text-primaryBlueColor font-bold underline underline-offset-[6px]"
            onClick={() => {
              dispatch(UpdateStatus("Login"));
              dispatch(ResetStringField("emailForSignup"));
              dispatch(ResetStringField("passwordForSignup"));
            }}
          >
            ورود
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
