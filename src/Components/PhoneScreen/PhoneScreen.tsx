import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Redux/Store";
import { UpdateStatus } from "../../Redux/Slices/UserStatus";
import { toPersianNumber } from "../../Utils/ToPersianNumber";
import {
  AppendToPhoneField,
  UpdateBooleanField,
  UpdateStringField,
} from "../../Redux/Slices/Fields";
import { persianPhoneNumber } from "../../Utils/PersianPhoneNumber";
import { useEffect } from "react";

const PhoneScreen = () => {
  const field = useSelector((state: RootState) => state.fields);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const phoneRegex = field.phone.replace(/^\D$/g, "");

    if (phoneRegex.length === 10) {
      dispatch(UpdateBooleanField({ name: "isPhoneTrue", value: true }));
    } else {
      dispatch(UpdateBooleanField({ name: "isPhoneTrue", value: false }));
    }
  }, [field.phone]);

  return (
    <div className="h-screen overflow-hidden bg-[#F0F0F2] dark:bg-primaryBlackColor flex flex-col">
      <div className="bg-[#f0f0f2] dark:bg-primaryBlackColor h-64 flex flex-col justify-evenly">
        <div className="relative">
          <p className="text-lg font-bold text-primaryBlackColor dark:text-primaryWhiteColor text-center">
            با تلفن ادامه دهید
          </p>
          <i
            className="bi bi-chevron-right text-xl text-primaryBlackColor dark:text-primaryWhiteColor
          text-center absolute top-1/2 right-4 -translate-y-1/2"
            onClick={() => dispatch(UpdateStatus("Signup"))}
          ></i>
        </div>

        <img
          src="/Images/PhoneImage/PhoneImage.png"
          alt="Phone-Image"
          loading="lazy"
          className="h-32 w-32 mx-auto"
        />
      </div>

      <div
        className="bg-white dark:bg-blackColor rounded-t-3xl flex-grow flex flex-col justify-between
        py-6"
      >
        <div className="flex flex-col items-center gap-y-6">
          <p className="text-sm text-secondaryLightColor dark:text-secondaryDarkColor">
            شماره تلفن خود را وارد نمایید
          </p>

          <div className="flex items-center gap-x-2">
            <div className="flex items-center">
              <input
                id="phone-input"
                type="tel"
                autoComplete="tel"
                name="Phone"
                placeholder={`${toPersianNumber(904)}   - - -   - - - -`}
                value={toPersianNumber(persianPhoneNumber(field.phone))}
                disabled
                className={`border-y border-r px-5 py-3.5 rounded-r-xl transition duration-300 w-full text-sm
                          text-primaryBlackColor dark:text-primaryWhiteColor outline-none bg-white dark:bg-inputBg
                          ${
                            field.phone.length === 0
                              ? "border-[#B8B8D2] dark:border-[#B8B8D2]/20"
                              : field.isPhoneTrue
                              ? "border-primaryBlueColor/85"
                              : "border-red-600/85"
                          }`}
              />

              <p
                className={`bg-white dark:bg-inputBg text-primaryBlackColor dark:text-primaryWhiteColor text-sm font-bold \\
                border rounded-l-xl px-5 py-3.5 transition duration-300 ${
                  field.phone.length === 0
                    ? "border-[#B8B8D2] dark:border-[#B8B8D2]/20"
                    : field.isPhoneTrue
                    ? "border-primaryBlueColor/85"
                    : "border-red-600/85"
                }`}
              >
                {toPersianNumber(98)}+
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                field.isPhoneTrue && dispatch(UpdateStatus("Message"))
              }
              className="text-white bg-primaryBlueColor rounded-xl px-5 py-3.5"
            >
              ادامه
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3" dir="ltr">
          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("1"))}
          >
            {toPersianNumber(1)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center text-center"
            onClick={() => dispatch(AppendToPhoneField("2"))}
          >
            {toPersianNumber(2)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("3"))}
          >
            {toPersianNumber(3)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("4"))}
          >
            {toPersianNumber(4)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("5"))}
          >
            {toPersianNumber(5)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("6"))}
          >
            {toPersianNumber(6)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("7"))}
          >
            {toPersianNumber(7)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("8"))}
          >
            {toPersianNumber(8)}
          </p>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("9"))}
          >
            {toPersianNumber(9)}
          </p>

          <i
            className="bi bi-eraser text-2xl text-red-600 flex items-center justify-center px-12 py-9 "
            onClick={() => {
              const value = field.phone;
              const slicedValue = value.slice(0, -1);
              dispatch(
                UpdateStringField({ name: "phone", value: slicedValue })
              );
            }}
          ></i>

          <p
            className="text-2xl text-primaryBlackColor dark:text-primaryWhiteColor font-bold px-12 py-9
             flex items-center justify-center"
            onClick={() => dispatch(AppendToPhoneField("0"))}
          >
            {toPersianNumber(0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
