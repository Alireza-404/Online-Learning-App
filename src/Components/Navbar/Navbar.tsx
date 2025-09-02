import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import type { AppDispatch } from "../../Redux/Store";
import { UpdateStatus } from "../../Redux/Slices/UserStatus";
import { UpdateBooleanField } from "../../Redux/Slices/Fields";

interface NavItem {
  to: string;
  icon: string;
  label: string;
}

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navItems1: NavItem[] = [
    { to: "/", icon: "bi-house-fill", label: "خانه" },
    { to: "/course", icon: "bi-book-fill", label: "دوره ها" },
  ];

  const navItems2: NavItem[] = [
    { to: "/message", icon: "bi-chat-square-dots-fill", label: "پیام ها" },
    { to: "/account", icon: "bi-person-fill", label: "حساب" },
  ];

  return (
    <nav className="w-full fixed -translate-x-1/2 left-1/2 bottom-0 bg-white dark:bg-primaryBlackColor rounded-t-xl pb-1.5 flex items-end justify-center gap-x-9">
      {navItems1.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={() => dispatch(UpdateStatus(null))}
          className={({ isActive }) =>
            `flex flex-col items-center gap-y-0.5 pt-2 transition-all duration-200 ${
              isActive ? "border-t-2 border-primaryBlueColor" : "border-none"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <i
                className={`bi ${item.icon} text-xl font-bold ${
                  isActive
                    ? "text-primaryBlueColor"
                    : "text-secondaryLightColor/15 dark:text-secondaryDarkColor"
                }`}
              ></i>
              <p
                className={`text-[13px] font-bold ${
                  isActive
                    ? "text-primaryBlueColor"
                    : "text-secondaryLightColor dark:text-secondaryDarkColor"
                }`}
              >
                {item.label}
              </p>
            </>
          )}
        </NavLink>
      ))}

      <Link
        to={"/course"}
        onClick={() => {
          dispatch(
            UpdateBooleanField({ name: "focusOnSearchInput", value: true })
          );
        }}
        className="flex flex-col items-center gap-y-0.5 pt-2 transition-all duration-200 relative"
      >
        <i
          className="bi bi-search text-primaryBlueColor bg-gray-100 dark:bg-blue-950 px-3.5 py-2
         rounded-full border-4 border-white dark:border-primaryBlackColor text-[21px] absolute bottom-5"
        ></i>
        <p className="text-[13px] font-bold text-secondaryLightColor dark:text-secondaryDarkColor">
          جست و جو
        </p>
      </Link>

      {navItems2.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={() => dispatch(UpdateStatus(null))}
          className={({ isActive }) =>
            `flex flex-col items-center gap-y-0.5 pt-2 transition-all duration-200 ${
              isActive ? "border-t-2 border-primaryBlueColor" : "border-none"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <i
                className={`bi ${item.icon} text-xl font-bold ${
                  isActive
                    ? "text-primaryBlueColor"
                    : "text-secondaryLightColor/15 dark:text-secondaryDarkColor"
                }`}
              ></i>
              <p
                className={`text-[13px] font-bold ${
                  isActive
                    ? "text-primaryBlueColor"
                    : "text-secondaryLightColor dark:text-secondaryDarkColor"
                }`}
              >
                {item.label}
              </p>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
