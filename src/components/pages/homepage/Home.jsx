import React from "react";
import Description from "./content/Description";
import ProfImage from "./content/ProfImage";

const Home = () => {
  const [isImgLoaded, setIsImgLoaded] = React.useState(false);
  const handleImgLoad = () => {
    setIsImgLoaded(true);
  }
  return (
    <div className="mt-12 grid min-h-[calc(100vh-8rem)] place-items-center p-4 sm:mt-0 sm:min-h-[calc(100vh-5rem)] lg:p-12">
      <div className="flex max-w-[1344px] flex-col-reverse items-center justify-evenly gap-8 lg:flex-row lg:gap-0 xl:gap-12">
        {/* profile block */}
        <Description isImgLoaded={isImgLoaded} />
        {/* image block */}
        <ProfImage onImgLoad={handleImgLoad} />
      </div>
    </div>
  );
};

export default Home;
