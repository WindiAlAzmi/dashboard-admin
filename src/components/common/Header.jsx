import { FiSearch } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import { ChevronDownIcon} from "@heroicons/react/16/solid";
import { RxHamburgerMenu } from "react-icons/rx";


export default function Header() {
  return (
    <div className="px-[20px] md:px-0 flex-wrap flex flex-row items-center justify-between lg:w-full md:w-[90%] w-full border border-white border-b-[#F1F1F1] lg:h-[90px] md:h-[62px] h-[60px] ">
      {/* Hamburger btn for desktop and tablet*/}
      <div className="hidden md:flex flex-row items-center gap-[17px] ">
        <RxHamburgerMenu className="w-[24px] h-[24px] lg:hidden" />
        {/* SEARCH */}
        <div className="border border-border-input flex flex-row items-center lg:my-[23px]  py-[10px] px-[16px] lg:h-[44px] lg:w-[343px] md:h-[36px] md:w-[245px] rounded-[4px] bg-background-color">
          <input
            className="border border-none w-[90%] bg-transparent h-full text-[16px] font-normal outline-none leading-[24px]"
            type="text"
            placeholder="Search"
          />
          <FiSearch className="lg:w-[10%] lg:text-[24px] w-[24px] h-[24px]  text-[#B2B2B2]" />
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden flex-row items-center gap-[17px]">
        <RxHamburgerMenu className="md:text-[24px] text-[20px] lg:hidden text-[#B2B2B2]" />
        <FiSearch className="lg:w-[10%] md:text-[24px] text-[20px] w-[24px] h-[24px]  text-[#B2B2B2]" />
      </div>
      {/* PROFILE */}
      <div className=" flex flex-row  lg:flex-start justify-start md:justify-end  md:gap-[30px] gap-[16px] items-center py-[24px] lg:w-[364px] md:w-[220px] w-[160px] h-full">
        <BsFillBellFill className="text-[20px] md:text-[24px] text-[#B2B2B2]" />
        <RiMessage2Fill className="text-[20px] md:text-[24px] text-[#B2B2B2]" />
        <div className="cursor-pointer lg:w-[193px] md:w-[68px] w-[62px] h-[42px] flex flex-row gap-[12px]">
          <img
            src="/assets/img/profile.png"
            alt="img"
            className="lg:w-[42px] lg:h-[42px] w-[36px] h-[36px]"
          />
          <div className="flex flex-row  gap-[4px] py-[9px]">
            <h4 className="font-medium text-[16px] leading-[24px] lg:flex hidden">
              Admirra John
            </h4>
            <ChevronDownIcon className="lg:text-[24px] w-[24px] h-[24px] text-[#737898]" />
          </div>
        </div>
      </div>
    </div>
  );
}
