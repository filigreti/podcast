import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import blackPodcast from "@/images/podcast.jpg";
import greenPodcast from "@/images/greenpodcast.png";
import yellowPodcast from "@/images/yellowpodcast.png";
import whitePodcast from "@/images/whitepodcast.png";
import moneyPodcast from "@/images/moneypodcast.png";
import { Button } from "@/components/ui/button";

const Discover = () => {
  const colors = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="grid lg:grid-cols-10 xl:grid-cols-10 2xl:grid-cols-11  gap-4">
        <div className="xl:col-span-4 2xl:col-span-5   lg:col-span-6  ">
          <h1 className=" text-xl font-medium">Discover</h1>

          <div
            style={{
              backgroundImage: `url(${blackPodcast.src})`,
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
            className="md:h-[16rem] h-[12rem] lg:h-[400px]  2xl:h-[425px]  bg-slate-700 scale-x-[-1] flex  flex-row-reverse mt-4 rounded-md"
          >
            <div className="scale-x-[-1] flex justify-center  font-bebas   text-gray-200 flex-col p-6">
              <p className=" xl:text-[5rem] text-3xl lg:text-[3.2rem]">
                DISCOVER
              </p>
              <p className=" xl:text-[3rem] xl:mt-2 lg:text-[1.8rem] lg:mt-2 ">
                YOUR NEXT
              </p>
              <p className=" xl:text-[3rem] lg:text-[1.8rem] mt-[-5px] xl:mt-[-16px] ">
                PODCAST
              </p>

              <div>
                <Button className="xl:mt-10 mt-4 lg:mt-8  rounded-full bg-[#B55DA5] !capitalize text-gray-200 xl:text-2xl xl:py-6  flex items-center justify-center xl:gap-5 xl:px-6 gap-3">
                  <span className="xl:pt-1">Explore Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path
                        strokeLinecap="round"
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"
                      />
                      <path
                        strokeDasharray="4 3"
                        strokeLinecap="round"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2"
                      />
                      <path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z" />
                    </g>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 xl:row-span-2 xl:col-start-5 2xl:col-span-3   lg:col-span-4  lg:col-start-7 	">
          <h1 className=" text-xl font-medium">Podcast List</h1>
          <div className="grid lg:grid-cols-2 w-full  md:grid-cols-3 mt-4 gap-4 h-[45rem] md:h-[22rem]  lg:h-[400px] 2xl:h-[425px]">
            <div
              style={{
                backgroundImage: `url(${greenPodcast.src})`,
                backgroundPosition: "center bottom",
                backgroundSize: "cover",
              }}
              className="w-full h-full rounded-sm "
            ></div>
            <div
              style={{
                backgroundImage: `url(${whitePodcast.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-full rounded-sm "
            ></div>
            <div
              style={{
                backgroundImage: `url(${yellowPodcast.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-full rounded-sm"
            ></div>
            <div
              style={{
                backgroundImage: `url(${moneyPodcast.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-full rounded-sm"
            ></div>
          </div>
        </div>
        <div className="xl:col-span-3 xl:row-span-2 xl:col-start-8 lg:col-span-4 lg:row-span-2 lg:row-start-3 2xl:col-span-3 ">
          <h1 className=" text-xl font-medium">Top Podcaster</h1>
          <div className="mt-4 2xl:pt-8 h-full  rounded-md bg-primary space-y-6  p-6 xl:h-[400px] 2xl:h-[425px]">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div className=" text-white bg-primary flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <Avatar className=" 2xl:size-[3.2rem] xl:size-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className=" text-sm font-bold text-white ">
                        Charles Osuya
                      </p>
                      <p className=" text-[0.65rem] text-gray-400 pt-[1px]">
                        4,521,20 Followers
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      className=" bg-transparent gap-2 px-3 border-gray-500 !text-xs h-8 text-gray-400 hover:bg-transparent hover:border-gray-500 hover:text-gray-500"
                      variant="outline"
                    >
                      Follow
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M11.5 4.5A1.5 1.5 0 0 0 10 6v3.5H6.5a1.5 1.5 0 0 0 0 3H10V16a1.5 1.5 0 0 0 3 0v-3.5h3.5a1.5 1.5 0 0 0 0-3H13V6a1.5 1.5 0 0 0-1.5-1.5"
                            clipRule="evenodd"
                            opacity=".2"
                          />
                          <path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z" />
                          <path d="M9.5 5a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z" />
                        </g>
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="xl:col-span-7 xl:row-span-2 xl:row-start-3 lg:col-span-4 lg:row-span-2  lg:row-start-3 2xl:col-span-8 ">
          <h1 className=" text-xl font-medium">Most Popular</h1>

          <div className="grid items-center grid-cols-10 grid-rows-1 gap-4 mt-4 bg-primary p-4 text-[0.85rem] rounded-sm">
            {Array(3)
              .fill()
              .map((_, index) => (
                <>
                  <div className=" w-4">{index + 1}</div>
                  <div className="col-span-3">
                    <div className="pt-3">
                      <p className=" text-sm font-bold text-white ">
                        Beautiful mindset in our life
                      </p>
                      <p className=" text-[0.65rem] text-gray-400 pt-[1px]">
                        Tom Heart Smith
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 col-start-5">
                    <p className=" text-[0.75rem] text-gray-400 pt-[1px]">
                      Motivation
                    </p>
                  </div>
                  <div className="col-start-7 text-left ">
                    <p className=" text-[0.75rem] text-gray-400 pt-[1px]">
                      1:56:12
                    </p>
                  </div>
                  <div className="col-start-8 flex  gap-2">
                    {Array(5)
                      .fill()
                      .map((_, indexTwo) => (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-8"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill={
                                index > indexTwo - 1 ? "yellow" : "currentcolor"
                              }
                              d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                            />
                          </svg>
                        </>
                      ))}
                  </div>
                  <div className="col-span-2 col-start-9">
                    <div className=" flex items-end justify-end gap-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10-5.75a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V7a.75.75 0 0 1 .75-.75m-4 10a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div className="xl:col-span-3 xl:row-span-2 xl:col-start-8 xl:row-start-3 lg:col-span-6 lg:row-span-2 lg:row-start-5 2xl:col-span-3">
          5
        </div>
      </div>
    </div>
  );
};
export default Discover;
