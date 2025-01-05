export default function AcitivityDashboard() {
  return (
    <div className="border border-[##E0E0E0] rounded-[12px] lg:h-[258px] md:h-[319px] lg:w-full md:w-[35%] w-full lg:mt-0 md:mt-0 ">
      <div className="bg-[#1B204A]  rounded-t-[12px] px-[10px] py-[10px] h-[48px] flex flex-col text-left text-white">
        <h4 className="lg:text-[18px] lg:leading-[28px] md:text-[16px] md:leading-[24px]  text-[16px] leading-[24px] font-medium">
          Recently Activity
        </h4>
      </div>
      <div className="lg:h-[220px] flex flex-col gap-[28px] rounded-b-[12px] px-[26px] py-[24px] bg-[#161E54] text-[#FFFFFF]">
        {/* section - 1 */}
        <div className="flex flex-col gap-[6px] justify-center">
          <h5 className="text-[10px] leading-[11.72px] font-medium">
            10.40 AM, Fri 10 Sept 2021
          </h5>
          <h4 className="lg:text-[18px] lg:leading-[28px]  md:text-[16px] md:leading-[24px] text-[16px] leading-[24px]  font-medium">
            You Posted a New Job
          </h4>
          <h4 className="text-[14px] leading-[20px] font-normal">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </h4>
        </div>
        {/* section - 2 */}
        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start lg:gap-[35px] gap-[18px]">
          <h4 className="text-[14px] leading-[20px] font-normal">
            Today you makes 12 Activity
          </h4>
          <div className="whitespace-pre border border-black text-white bg-[#FF5151]  h-[38px] py-[10px] px-[16px] rounded-[4px]">
            <h4 className="text-[14px] leading-[20px] font-normal w-full">
              See All Activity
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
