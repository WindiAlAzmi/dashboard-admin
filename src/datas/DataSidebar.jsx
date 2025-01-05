import { MdDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiUserPlus } from "react-icons/hi2";
import { MdHeadsetMic } from "react-icons/md";
import { MdSettings } from "react-icons/md";


export function DataSidebarMainMenu() {
  return [
    {
      name: "Dashboard",
      path: "/",
      icon: <MdDashboard className="iconColor" />,
    },
    {
      name: "Recruitment",
      path: "/",
      icon: <HiUserPlus className="iconColor" />,
    },
    {
      name: "Schedule",
      path: "/",
      icon: <FaCalendarDay className="iconColor" />,
    },
    {
      name: "Employee",
      path: "/",
      icon: (
        <HiMiniUserGroup className="iconColor" />
      ),
    },
    {
      name: "Department",
      path: "/",
      icon: (
        <HiMiniUserGroup className="iconColor  text-secondary-subtitle-color text-[24px]" />
      ),
    },
  ];
}

export function DataSidebarOther() {
  return [
    {
      name: "Support",
      path: "/",
      icon: <MdHeadsetMic className="iconColor" />,
    },
    {
      name: "Settings",
      path: "/",
      icon: <MdSettings className="iconColor text-2xl" />,
    },
  ];
}
