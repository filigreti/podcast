"use client";
import { CirclesWithBar } from "react-loader-spinner";
const PageLoader = () => {
  return (
    <div className=" flex items-center justify-center  h-dvh w-full">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=" spinner"
        visible={true}
      />
    </div>
  );
};

export default PageLoader;
