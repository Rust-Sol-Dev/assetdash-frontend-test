import { FC, useMemo } from "react";
import { ChartData } from "../utils/types";
import { PieChart } from "react-minimal-pie-chart";

const PortfolioChart: FC<ChartData> = ({ total_value, chart }) => {
  const chartData = useMemo(() => {
    const colors = [
      "#21ce99",
      "#30E2AC",
      "#85EBCC",
      "#37A893",
      "#3CCA7D",
      "#16D79D",
    ];

    const data = Object.entries(chart).map(([key, value], index) => ({
      title: (key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, " "),
      value,
      color: colors[index % colors.length],
    }));
    return data;
  }, [chart]);

  return (
    <div className="w-[calc(100%-56px)] sm:w-[360px] text-center mt-4 lg:mt-10">
      <h2 className="text-white text-[28px] lg:text-[36px]">Portfolio Chart</h2>
      <div className="my-6 md:my-10">
        <PieChart
          data={chartData}
          lineWidth={15}
          rounded={false}
          paddingAngle={1}
          labelPosition={75}
          label={({ dataEntry }) => `${dataEntry.title}`}
          labelStyle={(index) => ({
            fill: "#fff",
            fontSize: "4px",
          })}
        />
      </div>
      <p className="text-[28px] md:text-[32px] text-white">
        Total: $ {total_value.toLocaleString("us")}
      </p>
    </div>
  );
};

export default PortfolioChart;
