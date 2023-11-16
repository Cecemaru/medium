import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div>
      <div className="sticky top-0 border-b-[#F2F2F2] border-[1px] bg-white">
        <Header />
      </div>
      <div className="max-w-[1318px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
