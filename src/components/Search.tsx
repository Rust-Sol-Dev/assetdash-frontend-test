import React, { Dispatch, FC, SetStateAction } from "react";
import { SearchIcon } from "./SvgIcons";

interface SearchProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ userId, setUserId }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  return (
    <div className="relative mt-2 md:mt-0">
      <button className="w-6 h-6 absolute right-2 top-2">
        <SearchIcon color="#21ce99" />
      </button>
      <input
        value={userId}
        placeholder="Search by User ID"
        onChange={handleChange}
        className="border-[1px] border-[#fff] bg-transparent py-2 pl-3 pr-9 h-10 w-[220px] text-lg text-white"
      />
    </div>
  );
};

export default Search;
