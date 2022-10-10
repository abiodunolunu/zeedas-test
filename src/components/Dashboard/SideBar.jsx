import React from "react";
import HomeIcon from "../../components/Icons/HomeIcon";
import InboxIcon from "../../components/Icons/InboxIcon";
import PeopleIcon from "../../components/Icons/PeopleIcon";
import ProjectIcon from "../../components/Icons/ProjectIcon";
import WalletIcon from "../../components/Icons/WalletIcon";

const iconLinks = [HomeIcon, InboxIcon, PeopleIcon, ProjectIcon, WalletIcon];
const peopleArr = [
  { text: "LG", color: "#3D43A2" },
  { text: "JI", color: "#4DBD98" },
  { text: "PN", color: "#23B3E8" },
  { text: "AW", color: "#F15832" },
];

const navList = [
  {
    name: "Overview",
    children: [
      "Project Stats",
      "Planning",
      "Teamwork",
      "Team health",
      "Investment",
    ],
  },
  {
    name: "Action centre",
  },
  {
    name: "Apps",
  },
  {
    name: "Tasks",
  },
  {
    name: "Code review",
  },
  {
    name: "QA review",
  },
  {
    name: "Notes",
  },
];

const SideBar = () => {
  return (
    <div className="grid grid-cols-[5rem,1fr] h-full">
      <MiniSideBar />
      <BigSideBar />
    </div>
  );
};

const MiniSideBar = () => {
  return (
    <div className="h-full py-6 bg-[#052231] flex flex-col">
      <div className="py-8 flex gap-6 flex-col justify-center items-center">
        {iconLinks.map((Icon) => {
          return (
            <a
              href=""
              className="h-8 w-8 rounded-lg flex justify-center items-center hover:bg-[#23B3E8]"
            >
              <Icon />
            </a>
          );
        })}
      </div>
      <div className="py-7 flex flex-col gap-3 justify-center items-center  border border-x-0 border-[#F9F9F9] border-opacity-10">
        {peopleArr.map((val) => {
          return (
            <div
              key={val.text}
              className="h-6 w-6 rounded-full text-white flex justify-center items-center text-[0.5rem]"
              style={{ background: val.color }}
            >
              {val.text}
            </div>
          );
        })}
      </div>
      <div className="text-white mt-auto flex justify-center">
        <button className="h-10 w-10 bg-[#f9f9f9] bg-opacity-10 rounded-full text-[#23b3e8]">
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

const BigSideBar = () => {
  return (
    <div className="py-8 px-6">
      <div className="flex gap-4 text-xs">
        <i className="fas fa-angle-left text-[#03293D] text-opacity-50 "></i>

        <p className="font-bold">FCMB: Mobile ...</p>
      </div>

      <div className="mt-7">
        <h4 className="text-xs text-[#03293D] text-opacity-50">Workflows</h4>
        <div className="mt-2 flex justify-between items-center h-8 px-3 bg-[#03293D] bg-opacity-5 rounded-[10px]">
          <p className="text-sm font-semibold text-[#03293D]">Product Dev</p>
          <i className="fas fa-angle-down text-[#03293D] text-opacity-50"></i>
        </div>
      </div>

      <div className="mt-6">
        <ul className="grid gap-3 text-[#03293D] text-opacity-50">
          {navList.map((nv) => {
            return (
              <li className="text-sm font-semibold hover:text-[#23B3E8] cursor-pointer">
                <span>
                  {nv.name}

                  <i className="fas fa--caret-down"></i>
                </span>
                {nv.children && (
                  <ul className="mt-2">
                    {nv.children.map((ch) => {
                      return (
                        <li
                          className="text-[#03293D] text-opacity-50 border-l h-6 px-4 
                          flex items-center hover:text-[#23B3E8] hover:border-l-2 hover:border-[#23B3E8]"
                        >
                          {ch}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
