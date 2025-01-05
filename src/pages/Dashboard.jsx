import AcitivityDashboard from "../components/activity/AcitivityDashboard";
import AnalyticDashboard from "../components/analytic/AnalyticDashboard";
import AnnouncementDashboard from "../components/announcement/AnnouncementDashboard";
import ScheduleDashboard from "../components/schedule/ScheduleDashboard";

export default function Dashboard() {
  return (
    <div className="md:mb-10 lg:mb-0 w-full flex lg:flex-row md:flex-col flex-col flex-wrap gap-[30px] lg:gap-[40px] px-[20px] items-center">
      {/* analytic and announcement */}
      <div className="flex flex-col gap-[20px]  lg:w-[55%] md:w-[85%] w-full">
        <AnalyticDashboard />
        <AnnouncementDashboard />
      </div>

      {/* activity and schedule */}
      <div className="justify-between flex lg:flex-col md:flex-row flex-col lg:gap-[20px] md:gap-[16px] gap-[20px] lg:w-[35%] md:w-[85%] w-full lg:mt-[73px] md:mt-[10px] -mt-[5px]">
        <AcitivityDashboard />
        <ScheduleDashboard />
      </div>
    </div>
  );
}
