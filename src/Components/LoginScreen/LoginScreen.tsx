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

const LoginScreen = () => {
  const field = useSelector((state: RootState) => state.fields);
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginHandler = () => {
    if (field.isEmailForLoginTrue && field.isPasswordForLoginTrue) {
      dispatch(UpdateStatus(null));
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#F0F0F2] dark:bg-primaryBlackColor relative flex flex-col">
      <div className="h-40 p-5 bg-[#F0F0F2] dark:bg-primaryBlackColor flex flex-col justify-end">
        <p className="font-bold text-primaryBlackColor dark:text-primaryWhiteColor text-[32px] h-16">
          ورود
        </p>
      </div>

      <div className="flex flex-col flex-grow gap-y-8 px-6 py-8 bg-white dark:bg-blackColor rounded-t-3xl">
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="email-input-for-login"
            className="text-sm text-secondaryLightColor dark:text-secondaryDarkColor"
          >
            ایمیل شما
          </label>
          <input
            id="email-input-for-login"
            type="email"
            autoComplete="email"
            name="emailForLogin"
            placeholder="example@gmail.com"
            value={field.emailForLogin}
            onChange={(event) => {
              const value = event.target.value;
              dispatch(UpdateStringField({ name: "emailForLogin", value }));

              const emailRegex = /^([\w.-]+)@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
              dispatch(
                UpdateBooleanField({
                  name: "isEmailForLoginTrue",
                  value: emailRegex.test(value),
                })
              );
            }}
            onInput={(event) => {
              const value = (event.target as HTMLInputElement).value;
              dispatch(UpdateStringField({ name: "emailForLogin", value }));

              const emailRegex = /^([\w.-]+)@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
              dispatch(
                UpdateBooleanField({
                  name: "isEmailForLoginTrue",
                  value: emailRegex.test(value),
                })
              );
            }}
            className={`border px-5 py-3.5 rounded-xl bg-white dark:bg-inputBg  text-sm
              text-primaryBlackColor dark:text-primaryWhiteColor outline-none transition duration-300
              ${
                field.emailForLogin.length === 0
                  ? "border-[#B8B8D2] dark:border-[#B8B8D2]/20"
                  : field.isEmailForLoginTrue
                  ? "border-primaryBlueColor/85"
                  : "border-red-600/85"
              }`}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="password-input-for-login"
            className="text-sm text-secondaryLightColor dark:text-secondaryDarkColor"
          >
            رمز عبور
          </label>

          <div className="relative">
            <input
              id="password-input-for-login"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              name="passwordForLogin"
              placeholder={`حداقل ${toPersianNumber(8)} کاراکتر`}
              value={field.passwordForLogin}
              onChange={(event) => {
                const value = event.target.value;
                dispatch(
                  UpdateStringField({ name: "passwordForLogin", value })
                );

                const passwordRegex = /^[\w+!$.-]{8,16}$/;
                dispatch(
                  UpdateBooleanField({
                    name: "isPasswordForLoginTrue",
                    value: passwordRegex.test(value),
                  })
                );
              }}
              onInput={(event) => {
                const value = (event.target as HTMLInputElement).value;
                dispatch(
                  UpdateStringField({ name: "passwordForLogin", value })
                );

                const passwordRegex = /^[\w+!$.-]{8,16}$/;
                dispatch(
                  UpdateBooleanField({
                    name: "isPasswordForLoginTrue",
                    value: passwordRegex.test(value),
                  })
                );
              }}
              className={`border px-5 py-3.5 rounded-xl transition duration-300 w-full text-sm
              text-primaryBlackColor dark:text-primaryWhiteColor outline-none bg-white dark:bg-inputBg
              ${
                field.passwordForLogin.length === 0
                  ? "border-[#B8B8D2] dark:border-[#B8B8D2]/20"
                  : field.isPasswordForLoginTrue
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

          <p className="text-sm text-secondaryLightColor dark:text-secondaryDarkColor mt-2">
            رمز عبور را فراموش کرده اید؟
          </p>
        </div>

        <button
          type="button"
          className="bg-primaryBlueColor text-primaryWhiteColor font-bold rounded-xl w-full py-3.5"
          onClick={loginHandler}
        >
          ورود
        </button>

        <p className="text-secondaryLightColor dark:text-secondaryDarkColor text-xs text-center">
          حساب کاربری ندارید؟{" "}
          <span
            className="text-primaryBlueColor font-bold underline underline-offset-[6px]"
            onClick={() => {
              dispatch(UpdateStatus("Signup"));
              dispatch(ResetStringField("emailForLogin"));
              dispatch(ResetStringField("passwordForLogin"));
            }}
          >
            ثبت نام
          </span>
        </p>

        <div className="relative">
          <span className="h-px w-full block bg-secondaryDarkColor dark:bg-secondaryLightColor"></span>
          <p
            className="text-xs text-secondaryLightColor dark:text-secondaryDarkColor px-4 absolute
            top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white dark:bg-blackColor"
          >
            یا وارد شوید با
          </p>
        </div>

        <div className="flex justify-center items-center gap-x-10">
          <img
            src="/Images/Logos/FaceBookLogo.png"
            alt="FaceBook-Logo"
            className="w-9 h-9"
          />
          <img
            src="/Images/Logos/GoogleLogo.png"
            alt="Google-Logo"
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
