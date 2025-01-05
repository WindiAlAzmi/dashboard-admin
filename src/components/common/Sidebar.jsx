import { Link } from "react-router-dom";
import  { DataSidebarMainMenu, DataSidebarOther } from "../../datas/DataSidebar"

export default function Sidebar() {
  const datasMainMenu = DataSidebarMainMenu();
  const datasOther = DataSidebarOther();

  return (
    <div className="bg-background-color w-[18%] lg:block hidden pt-[30px]">
      {/* Title */}
      <div className="px-[67px] pb-[49px] text-center">
        <h4 className="font-semibold text-black leading-[42px] text-[36px]">
          WeHR
        </h4>
      </div>
      {/* Main Menu */}
      <div className="text-left flex flex-col mb-[39px]">
        <div className="py-[10px] px-[30px]">
          <h4 className="font-medium text-secondary-subtitle-color leading-[18px] text-[12px]">
            MAIN MENU
          </h4>
        </div>
        <div className="flex flex-col">
          {datasMainMenu.map((item, index) => (
            <Link
              to="/"
              key={index}
              className="flex flex-row flex-start gap-[24px] px-[30px] py-[16px] text-secondary-subtitle-color cursor-pointer hover:text-main-red"
            >
              {item.name !== "Department" ? (
                item.icon
              ) : (
                <img src="/assets/icons/ic_department.png" alt="iconImg" />
              )}
              <h5 className=" text-[16px] leading-[24px] font-normal">
                {item.name}
              </h5>
            </Link>
          ))}
        </div>
      </div>

      {/* Other */}
      <div className="text-left flex flex-col mb-[39px]">
        <div className=" py-[10px] px-[30px]">
          <h4 className="font-medium text-secondary-subtitle-color leading-[18px] text-[12px]">
            OTHER
          </h4>
        </div>
        <div className="flex flex-col">
          {datasOther.map((item, index) => (
            <Link
              to="/"
              key={index}
              className="flex flex-row flex-start gap-[24px] px-[30px] py-[16px] text-secondary-subtitle-color cursor-pointer hover:text-main-red"
            >
              {item.icon}
              <h5 className=" text-[16px] leading-[24px] font-normal">
                {item.name}
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
