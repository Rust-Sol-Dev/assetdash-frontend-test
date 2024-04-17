import { FC, useMemo } from "react";
import { useRecoilState } from "recoil";
import Title from "../Title";
import Search from "../Search";
import { userIdState } from "../../context/state";
import HoldingsTable from "../HoldingsTable";
import { getProfileData } from "../../utils/api-demo";
import PortfolioChart from "../PortfolioChart";

const HomePage: FC = () => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const userData = useMemo(() => {
    const data = getProfileData(userId);
    console.log(data);
    return data;
  }, [userId]);

  return (
    <main className="min-h-screen bg-black">
      <div className="container max-w-[1024px] min-h-screen mx-0 lg:mx-auto">
        <div className="flex flex-col items-center justify-between px-6 py-6 md:flex-row">
          <Title title="AssetDash Portfolio Tracker" />
          <Search userId={userId} setUserId={setUserId} />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 lg:items-start lg:justify-between lg:flex-row">
          {userData && (
            <>
              <PortfolioChart
                total_value={userData.chartData.total_value}
                chart={userData.chartData.chart}
              />
              <HoldingsTable rows={userData.tableData} />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
