import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopHeader = ({}) => {
  return (
    <div className=" w-full   md:grid md:grid-cols-[3fr_1.3fr] md:gap-5 text-white  ">
      <div className="flex items-center md:relative md:w-full w-[65%] mx-auto">
        <Icon
          icon="healthicons:magnifying-glass"
          className=" absolute w-5 h-5 mt-[3px] text-gray-400 ml-4"
        />
        <input
          autoComplete="off"
          id="name"
          placeholder="Search your favorite podcast"
          className=" h-10 w-full pl-12 shadow-sm rounded-sm bg-transparent top-nav-input outline-none !border-transparent !focus:border-transparent !focus:ring-0  text-[0.85rem]  dark:bg-primary card-shadow dark:placeholder:text-gray-500  font-sans font-medium "
        />
      </div>
      <div className="md:flex justify-between hidden">
        <Button
          className="max-[1180px]:hidden flex items-center bg-primary shadow-sm border-transparent  card-shadow"
          variant="outline"
          size="icon"
        >
          <Icon
            icon="solar:headphones-round-sound-outline"
            className=" absolute w-5 h-5  text-gray-400 "
          />
        </Button>
        <Button
          className="max-[1025px]:hidden flex items-center bg-primary shadow-sm border-transparent  card-shadow"
          variant="outline"
          size="icon"
        >
          <div className="relative items-center justify-center flex">
            <Icon
              icon="solar:bell-bing-broken"
              className=" absolute w-5 h-5  text-gray-400 "
            />
            <div className="w-[0.75rem] h-[0.75rem] text-[7px] rounded bg-blue-500 absolute right-[.8px] bottom-[1px] flex items-center justify-center">
              4
            </div>
          </div>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className=" flex items-center justify-between bg-primary shadow-sm border-transparent  card-shadow gap-6 ">
              <div className="flex items-center">
                <Avatar className=" text-white card-shadow h-8 w-8 p-[1px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CO</AvatarFallback>
                </Avatar>
                <p className=" text-xs font-bold text-white ml-2 ">
                  Charles Osuya
                </p>
              </div>
              <Icon
                icon="solar:menu-dots-bold"
                className="  w-5 h-5  text-gray-400 "
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 !text-white mr-4 card-shadow">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className=" hover:!text-white">
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:!text-white">
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" hover:!text-white">
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopHeader;
