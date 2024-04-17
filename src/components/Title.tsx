import { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="" title={title}>
      <h1 className="text-[32px] md:text-[36px] lg:text-[56px] font-bold text-white text-center md:text-left">
        Asset<span className="text-primary">Dash</span> Portfolio Tracker
      </h1>
    </div>
  );
};

export default Title;
