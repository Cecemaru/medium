import clsx from "clsx";
import { tabs } from "../../utils/const";
import { useLocation } from "react-router-dom";

const TagHeaderFollow = () => {
  const tabActive = useLocation();

  console.log("tabacitibgasd", tabActive);

  return (
    <div className="sticky top-[57px]">
      <ul>
        <div className="flex">
          {tabs.map((tab, index) => (
            <li key={index}>
              <div
                className={clsx(
                  "pb-4 mr-8 border-b-[1px] min-w-max border-b-white",
                  tabActive.pathname == `/${tab.path}` && "border-b-black"
                )}
              >
                <a href={`/${tab.path}`}>{tab.title}</a>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TagHeaderFollow;
