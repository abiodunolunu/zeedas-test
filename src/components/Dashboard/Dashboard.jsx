import React from "react";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[300px,1fr] h-screen">
      <SideBar />
      <div className="bg-[#E5E5E5] pt-20 px-12">
        <div className="py-3">
          <div className="flex justify-between items-center">
            <p className="font-bold text-[#03293D]">Project stats</p>

            <button className="bg-white px-4 py-3 text-sm rounded-lg">
              All time <i className="fas fa-caret-down ml-8"></i>
            </button>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 items-start">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg ">
                  <h4 className="text-[#03293D] text-opacity-50">
                    Average PR Size
                    <i className="fas fa-exclamation-circle ml-2 text-[#03293D] text-opacity-20"></i>
                  </h4>

                  <hr className="bg-[#03293D] bg-opacity-5 mt-4" />

                  <div className="grid grid-cols-2 mt-6">
                    <div>
                      <p className="text-[#03293D] text-xl font-bold">
                        968{" "}
                        <span className="text-[#03293D] text-opacity-50 text-xs font-normal">
                          lines
                        </span>
                      </p>
                      <p className="text-[#03293D] text-opacity-50 text-sm">
                        Line change
                      </p>
                    </div>
                    <div>
                      <p className="text-[#03293D] text-xl font-bold">
                        240{" "}
                        <span className="text-[#03293D] text-opacity-50 text-xs font-normal">
                          kb
                        </span>
                      </p>
                      <p className="text-[#03293D] text-opacity-50 text-sm">
                        Size
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 text-sm">
                    <p className="bg-[#4DBD98] bg-opacity-10 text-[#4DBD98]  flex justify-center gap-1 items-center w-min px-4 py-2 rounded-md">
                      <i className="fas fa-arrow-up"></i> 24%
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg ">
                  <h4 className="text-[#03293D] text-opacity-50">
                    Average Ticket Duration
                    <i className="fas fa-exclamation-circle ml-2 text-[#03293D] text-opacity-20"></i>
                  </h4>

                  <hr className="bg-[#03293D] bg-opacity-5 mt-4" />

                  <div className="grid grid-cols-2 mt-6">
                    <div>
                      <p className="text-[#03293D] text-xl font-bold">
                        36{" "}
                        <span className="text-[#03293D] text-opacity-50 text-xs font-normal">
                          hours
                        </span>
                      </p>
                      <p className="text-[#03293D] text-opacity-50 text-sm">
                        Size
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 text-sm">
                    <p className="bg-[#F15832] bg-opacity-10 text-[#F15832]  flex gap-1 justify-center items-center w-min px-4 py-2 rounded-md">
                      <i className="fas fa-arrow-up"></i> 24%
                    </p>
                  </div>
                </div>
                <div></div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-[#03293D] text-opacity-50">
                  Cycle Time
                  <i className="fas fa-exclamation-circle ml-2 text-[#03293D] text-opacity-20"></i>
                </h4>

                <hr className="bg-[#03293D] bg-opacity-5 mt-4 mb-8" />

                <div className="grid grid-cols-2">
                  <div></div>
                  <div>
                    <ul className="grid gap-4">
                      <li className="flex items-center gap-3 text-sm">
                        <span className="h-4 w-4 rounded-full bg-[#4DBD98] inline-block"></span>

                        <p className="text-[#03293D]">
                          4hrs{" "}
                          <span className="text-[#03293D] text-opacity-50">
                            Coding
                          </span>
                        </p>
                      </li>{" "}
                      <li className="flex items-center gap-3 text-sm">
                        <span className="h-4 w-4 rounded-full bg-[#23B3E8] inline-block"></span>

                        <p className="text-[#03293D]">
                          8hrs{" "}
                          <span className="text-[#03293D] text-opacity-50">
                            Code Review
                          </span>
                        </p>
                      </li>{" "}
                      <li className="flex items-center gap-3 text-sm">
                        <span className="h-4 w-4 rounded-full bg-[#03293D] inline-block"></span>

                        <p className="text-[#03293D]">
                          1hrs{" "}
                          <span className="text-[#03293D] text-opacity-50">
                            QA Review
                          </span>
                        </p>
                      </li>{" "}
                      <li className="flex items-center gap-3 text-sm">
                        <span className="h-4 w-4 rounded-full bg-[#F15832] inline-block"></span>

                        <p className="text-[#03293D]">
                          3hrs{" "}
                          <span className="text-[#03293D] text-opacity-50">
                            Idle Time
                          </span>
                        </p>
                      </li>{" "}
                      <li className="flex items-center gap-3 text-sm">
                        <span className="h-4 w-4 rounded-full bg-[#826AF9] inline-block"></span>

                        <p className="text-[#03293D]">
                          1hrs{" "}
                          <span className="text-[#03293D] text-opacity-50">
                            Deployment
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-[#03293D] text-opacity-50">
                  Cycle Time
                  <i className="fas fa-exclamation-circle ml-2 text-[#03293D] text-opacity-20"></i>
                </h4>

                <hr className="bg-[#03293D] bg-opacity-5 mt-4 mb-8" />

                <div className="grid grid-cols-3 mt-6">
                  <div>
                    <p className="text-[#03293D] text-xl font-bold">
                      968{" "}
                      <span className="text-[#03293D] text-opacity-50 text-xs font-normal">
                        lines
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-[#03293D] text-xl font-bold">
                      54{" "}
                      <span className="text-[#03293D] text-opacity-50 text-xs font-normal">
                        tickets
                      </span>
                    </p>
                  </div>

                  <div>
                    <p className="text-[#03293D] text-xl font-bold">
                      4{" "}
                      <span className="text-[#03293D] text-opacity-50 text-xs font-normal">
                        total weeks worked
                      </span>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl h-9 overflow-hidden grid grid-cols-[25%,15%,40%,20%] mt-6">
                  <div className="bg-[#4DBD98] h-full"></div>
                  <div className="bg-[#23B3E8] h-full"></div>
                  <div className="bg-[#03293D] h-full"></div>
                  <div className="bg-[#F15832] h-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="h-4 w-4 rounded-full bg-[#4DBD98] inline-block"></span>

                    <p className="text-[#03293D]">
                      25%{" "}
                      <span className="text-[#03293D] text-opacity-50">
                        New work
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="h-4 w-4 rounded-full bg-[#23B3E8] inline-block"></span>

                    <p className="text-[#03293D]">
                      15%{" "}
                      <span className="text-[#03293D] text-opacity-50">
                        Rework
                      </span>
                    </p>
                  </div>{" "}
                  <div className="flex items-center gap-3 text-sm">
                    <span className="h-4 w-4 rounded-full bg-[#03293D] inline-block"></span>

                    <p className="text-[#03293D]">
                      40%{" "}
                      <span className="text-[#03293D] text-opacity-50">
                        Refactor
                      </span>
                    </p>
                  </div>{" "}
                  <div className="flex items-center gap-3 text-sm">
                    <span className="h-4 w-4 rounded-full bg-[#F15832] inline-block"></span>

                    <p className="text-[#03293D]">
                      20%{" "}
                      <span className="text-[#03293D] text-opacity-50">
                        Bug
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg pb-10">
                <div className="flex justify-between items-center">
                  <h4 className="text-[#03293D] text-opacity-50">
                    Idle Time Breakdown
                    <i className="fas fa-exclamation-circle ml-2 text-[#03293D] text-opacity-20"></i>
                  </h4>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="h-4 w-4 rounded-full bg-[#4DBD98] inline-block"></span>

                      <p className="text-[#03293D]">Idle</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="h-4 w-4 rounded-full bg-[#03293D] bg-opacity-10 inline-block"></span>

                      <p className="text-[#03293D]">Productive</p>
                    </div>
                  </div>
                </div>

                <hr className="bg-[#03293D] bg-opacity-5 mt-4 mb-8" />

                <div className="flex justify-evenly border-b">
                  <div className="grid grid-cols-[1.5rem,1.5rem] gap-2 items-end relative">
                    <div className="h-20 bg-[#03293D] bg-opacity-10 rounded-t-md"></div>
                    <div className="h-7 bg-[#4DBD98] rounded-t-md"></div>
                    <p className="absolute -bottom-5 text-xs text-[#03293D] text-opacity-50 whitespace-nowrap">
                      Coding
                    </p>
                  </div>
                  <div className="grid grid-cols-[1.5rem,1.5rem] gap-2 items-end relative">
                    <div className="h-9 bg-[#4DBD98] rounded-t-md"></div>
                    <div className="h-16 bg-[#03293D] bg-opacity-10 rounded-t-md"></div>
                    <p className="absolute -bottom-5 text-xs text-[#03293D] text-opacity-50 whitespace-nowrap">
                      Code Review
                    </p>
                  </div>
                  <div className="grid grid-cols-[1.5rem,1.5rem] gap-2 items-end relative">
                    <div className="h-9 bg-[#4DBD98] rounded-t-md"></div>
                    <div className="h-[4.375rem] bg-[#03293D] bg-opacity-10 rounded-t-md"></div>
                    <p className="absolute -bottom-5 text-xs text-[#03293D] text-opacity-50 whitespace-nowrap">
                      QA Review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
