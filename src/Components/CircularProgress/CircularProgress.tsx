import { toPersianNumber } from "../../Utils/ToPersianNumber";

interface PropsType {
  value: number;
  max: number;
}

const CircularProgress = ({ value, max }: PropsType) => {
  return (
    <p className="text-sm text-primaryBlackColor dark:text-white px-2 py-1">
      {toPersianNumber(value)} <span className="text-primaryBlueColor">/</span>{" "}
      {toPersianNumber(max)}
    </p>
  );
};

export default CircularProgress;
