import { DataScheduleOther, DataSchedulePriority } from "../../datas/DataSchedule"
import { FaEllipsisH } from "react-icons/fa";
import { Select, Space } from "antd";
import { DataFilterAnnouncement } from "../../datas/DataAnnouncement";


export default function ScheduleDashboard() {
  const dataPriority = DataSchedulePriority();
  const dataOther = DataScheduleOther();
  const dataFilter = DataFilterAnnouncement();


  return (
    <div className="border border-[##E0E0E0] lg:w-full md:w-[60%] mb-10 md:mb-0 w-full rounded-[12px] pt-[16px]">
      {/* Header  */}
      <div className="flex flex-row px-[22px] justify-between">
        <h3 className="lg:text-[18px] lg:leading-[28px] text-[16px] leading-[24px] font-medium">
          Upcoming Schedule
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
      <div className="flex flex-col px-[22px] h-[424px] overflow-y-auto">
        {/* Body - section 1 */}
        <div className="flex w-full flex-col gap-[8px] mt-[16px]">
          <h3 className="text-primary-subtitle-color lg:text-[12px] lg:leading-[28px] text-[12px] leading-[24px] font-normal">
            Priority
          </h3>
          {dataPriority?.map((item, index) => (
            <div
              key={index}
              className="border border-[#E0E0E0] flex flex-row justify-between bg-[#FAFAFA] py-[12px] px-[16px] rounded-[6px] items-center"
            >
              {/* Teks */}
              <div className=" text-primary-subtitle-color w-[405px] flex flex-col gap-[6px] flex-wrap">
                <h4 className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px]  font-normal">
                  {item.title}
                </h4>
                <h5 className="lg:text-[10px] lg:leading-[14px] text-[10px] leading-[14px]   font-normal">
                  {item.date}
                </h5>
              </div>
              {/* Icon */}
              <div className=" flex flex-row items-center gap-[20px]">
                <FaEllipsisH className="text-[#B2B2B2] w-[18px] h-[18px]" />
              </div>
            </div>
          ))}
        </div>
        {/* Body - section 2 */}
        <div className="flex w-full flex-col gap-[8px] mt-[9px]">
          <h3 className="text-primary-subtitle-color lg:text-[12px] lg:leading-[28px] text-[12px] leading-[24px]  font-normal">
            Other
          </h3>
          {dataOther?.map((item, index) => (
            <div
              key={index}
              className="border border-[#E0E0E0] flex flex-row justify-between bg-[#FAFAFA] py-[12px] px-[16px] rounded-[6px] items-center"
            >
              {/* Teks */}
              <div className=" text-primary-subtitle-color w-[405px] flex flex-col gap-[6px] flex-wrap">
                <h4 className="lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px]  font-normal">
                  {item.title}
                </h4>
                <h5 className="lg:text-[10px] lg:leading-[14px] text-[10px] leading-[14px] font-normal">
                  {item.date}
                </h5>
              </div>
              {/* Icon */}
              <div className=" flex flex-row items-center gap-[20px]">
                <FaEllipsisH className="text-[#B2B2B2] w-[18px] h-[18px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border  w-full border-b-[##E0E0E0] rounded-b-[12px] px-[10px] py-[9.5px] flex flex-col text-center text-main-red">
        <h4 className="text-[14px] leading-[20px] font-medium">
          Creat a New Schedule
        </h4>
      </div>
    </div>
  );
}
