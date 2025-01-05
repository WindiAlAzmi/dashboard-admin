import { useEffect, useState } from "react";
import { DataColorAnalytic, DataGraph, DataPosition } from "../../datas/DataAnalytic";
import LineChartAnalytic from "./LineChartAnalytic";

export default function AnalyticDashboard() {
  const [isDataPosition, setIsDataPosition] = useState([]);
  const dataGraphAnalytic = DataGraph();

  const getData  = () => {
    const dataPosition = DataPosition();
    const dataColor = DataColorAnalytic();
    const putData = dataColor.map((item) => {
        const findData = dataPosition.find((data) => data.id === item.id);
        if(findData){
            return {
                ...item, 
                ...findData
            }
        }

        return item;
    })

    setIsDataPosition(putData);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="flex flex-col w-full">
      {/* Header analytic */}
      <h3 className="md:text-[24px] leading-[42px] lg:mb-[12px] lg:pt-[10px] font-medium">
        Dashboard
      </h3>
      {/* Position */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-[20px] md:gap-[14px] gap-[16px] w-full">
        {isDataPosition?.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.backgroundColor }}
            className={`rounded-[10px] min-w-[204px] lg:h-[136px] lg:py-[12px] lg:px-[20px] md:py-[14px] md:px-[24px] py-[16px] px-[20px] flex flex-col lg:gap-[16px]`}
          >
            <h4 className="lg:text-[18px] lg:leading-[28px] md:text-[16px] md:leading-[24px]  text-[16px] leading-[24px] font-medium">
              {item.title}
            </h4>
            <h3 className="lg:text-[36px] lg:leading-[28px] md:text-[32px] md:leading-[28px] text-[32px] leading-[28px] font-medium">
              {item.total}
            </h3>
            <div
              style={{
                color: item.color,
              }}
              className={`flex flex-row gap-1  lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[24px] text-[14px] leading-[24px] font-normal`}
            >
              <h4>{item.amount}</h4>
              <h4>{item.status}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Graph */}
      <div className="flex lg:flex-row md:flex-row flex-col gap-[16px] w-full mt-[20px]">
        {dataGraphAnalytic?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-[10px] lg:w-1/2 md:w-1/2 w-full border border-[#E0E0E0] p-[20px] flex flex-row gap-[10px] justify-between"
          >
            {/* numeric */}
            <div className="flex flex-col whitespace-nowrap">
              <h4 className="lg:text-[18px] lg:leading-[28px] md:text-[16px] md:leading-[24px] text-[16px] leading-[24px] font-medium">
                {item.title}
              </h4>
              <h4 className="lg:text-[48px] mb-[32px] mt-[22px] lg:leading-[28px] md:text-[42px] md:leading-[28px] text-[42px] leading-[28px] font-medium">
                {item.total}
              </h4>
              <div className="flex flex-col text-primary-subtitle-color gap-[4px] lg:text-[12px] lg:leading-[18px] md:text-[12px] md:leading-[24px] text-[12px] leading-[18px] font-normal">
                <h5>{item.genderDistribution.men} Men</h5>
                <h5>{item.genderDistribution.women} Women</h5>
              </div>
            </div>

            {/* mini graph */}
            <div className="flex flex-col gap-[20px] justify-center">
              <div className="flex flex-col justify-center">
                <LineChartAnalytic percentage={item.growth.percentage} />
              </div>
              <div className="rounded-[4px] bg-[#FFEFE7] whitespace-pre-line text-center flex flex-row px-[8px] text-secondary-title-color lg:text-[12px] lg:leading-[24px]  md:text-[12px] md:leading-[24px] text-[12px] leading-[24px] font-normal">
                <h5>{item.growth.percentage}</h5>
                <h5>{item.growth.description}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
