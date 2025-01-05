import {  Select, Space } from "antd";
import { DataFilterAnnouncement, DataListAnnouncement } from "../../datas/DataAnnouncement";
import { TiPin } from "react-icons/ti";
import { FaEllipsisH } from "react-icons/fa";

export default function AnnouncementDashboard() {
  const dataFilter = DataFilterAnnouncement();
  const dataList = DataListAnnouncement();

  return (
    <div className="border border-[##E0E0E0] rounded-[12px] pt-[16px]">
      {/* Header  */}
      <div className="flex flex-row items-center px-[22px] justify-between">
        <h3 className="lg:text-[18px] lg:leading-[28px] text-[16px] leading-[24px]  font-medium">
          Announcement
        </h3>
        <div className="cursor-pointer">
          <Space wrap>
            <Select
              defaultValue={dataFilter[0].value}
              style={{
                width: 200,
                outline: "none",
              }}
              options={dataFilter}
            />
          </Space>
        </div>
      </div>
      <div className="flex flex-col px-[22px] h-[334px] overflow-y-auto">
        {/* Body */}
        <div className="flex flex-col gap-[8px] mt-[16px]">
          {dataList?.map((item, index) => (
            <div
              key={index}
              className="border border-[#E0E0E0] flex flex-row justify-between bg-[#FAFAFA] py-[12px] px-[16px] rounded-[6px] items-center"
            >
              {/* Teks */}
              <div className=" text-primary-subtitle-color w-[405px] flex flex-col gap-[6px] flex-wrap">
                <h4 className="lg:text-[16px] lg:leading-[24px]  text-[14px] leading-[21px] font-normal">
                  {item.title}
                </h4>
                <h5 className="lg:text-[10px] lg:leading-[14px] text-[10px] leading-[14px]  font-normal">
                  {item.date}
                </h5>
              </div>
              {/* Icon */}
              <div className=" flex flex-row items-center gap-[20px]">
                <TiPin className="text-secondary-subtitle-color w-[24px] h-[24px]" />
                <FaEllipsisH className="text-[#B2B2B2] w-[18px] h-[18px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-b-[##E0E0E0] rounded-b-[12px] px-[10px] py-[9.5px] flex flex-col text-center text-main-red">
        <h4 className="text-[14px] leading-[20px] font-medium">
          See All Announcement
        </h4>
      </div>
    </div>
  );
}
