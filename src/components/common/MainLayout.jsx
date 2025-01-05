import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className=" w-full  flex-wrap flex flex-row h-screen">
      <Sidebar/>
      <div className="lg:w-[80%] w-full md:pl-0 pl-0 lg:pl-[50px] lg:px-0 lg:py-0 md:px-[16px] md:py-[12.5px] px-[10px] py-0 flex-wrap flex flex-col items-center gap-[11px]">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}
