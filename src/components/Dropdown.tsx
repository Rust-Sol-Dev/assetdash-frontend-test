import { FC } from "react";
import { ASSET_TYPES } from "../utils/demo";
import { ArrowDownIcon } from "./SvgIcons";
interface DropdownProps {
  value: string;
  setValue: Function;
  className?: string;
}
const Dropdown: FC<DropdownProps> = ({ value, setValue, className }) => {
  return (
    <div
      className={` ${className} w-[100px] md:w-[130px] border-[1px] h-9 border-white group`}
    >
      <div className="text-white text-left capitalize px-3 h-9 flex items-center">
        {(value.charAt(0).toUpperCase() + value.slice(1)).replace(/_/g, " ")}
        <span className="absolute right-0 w-6 h-6 mt-3 ">
          <ArrowDownIcon />
        </span>
      </div>
      <div className="group-hover:flex absolute text-white w-[100px] md:w-[130px] bg-black hidden flex-col justify-start border-b border-x -left-[1px] top-8">
        {value !== "all" && (
          <button
            className="text-left px-3 py-1 text-sm hover:text-primary"
            onClick={() => setValue("all")}
          >
            All
          </button>
        )}
        {ASSET_TYPES.map(
          (item, key) =>
            item !== value && (
              <button
                onClick={() => setValue(item)}
                key={key}
                className="capitalize text-left px-3 py-1 text-sm hover:text-primary"
              >
                {(item.charAt(0).toUpperCase() + item.slice(1)).replace(
                  /_/g,
                  " "
                )}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default Dropdown;
