import { FC, useState } from "react";
import { TableRowData } from "../utils/types";
import Dropdown from "./Dropdown";

interface TalbleRows {
  rows: TableRowData[];
}

const HoldingsTable: FC<TalbleRows> = ({ rows }) => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="text-center w-[calc(100%-48px)] lg:w-[calc(100%-420px)]">
      <div className="relative">
        <h2 className="text-white text-left md:text-center text-2xl md:text-3xl mt-10">
          Portfolio <span className="text-primary">Holdings</span>
        </h2>
        <Dropdown
          value={filter}
          setValue={setFilter}
          className="absolute -right-2 md:right-5 top-0"
        />
      </div>
      <table className="text-white w-full mt-5 mb-20">
        <thead>
          <tr>
            <th className="px-2 py-1.5 md:py-2 md:px-5 border-b-[1px] border-primary text-left text-xs md:text-md">
              Name
            </th>
            <th className="px-2 py-1.5 md:py-2 md:px-5 border-b-[1px] border-primary text-left text-xs md:text-md">
              Ticker
            </th>
            <th className="px-2 py-1.5 md:py-2 md:px-5 border-b-[1px] border-primary text-xs md:text-md">
              Percentage (%)
            </th>
            <th className="px-2 py-1.5 md:py-2 md:px-5 border-b-[1px] border-primary text-xs md:text-md">
              Amount ($)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(
            (item, key) =>
              (filter === "all" || filter === item.type) && (
                <tr key={item.name + key}>
                  <td className="px-2 py-1.5 md:py-3 md:px-5  text-xs lg:text-[16px] text-left">{item.name}</td>
                  <td className="px-2 py-1.5 md:py-3 md:px-5  text-xs lg:text-[16px] text-left">{item.ticker}</td>
                  <td className="px-2 py-1.5 md:py-3 md:px-5  text-xs lg:text-[16px]">{item.percentage.toFixed(2)}</td>
                  <td className="px-2 py-1.5 md:py-3 md:px-5  text-xs lg:text-[16px] text-right">{item.value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;
