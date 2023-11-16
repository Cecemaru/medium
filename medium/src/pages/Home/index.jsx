import { Outlet } from "react-router-dom";
import SideBar from "../../layout/Sidebar";
import HomeHeader from "./HomeHeader";

export default function Home() {
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="min-w-[728px]">
          <div className="h-[27px]"> </div>
          <HomeHeader />
          <Outlet />
        </div>
        <div className="min-w-[368px] border-l-[#F2F2F2] border-[1px]">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
