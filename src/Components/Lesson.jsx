import React, { useState } from "react";

function Lesson() {
  const [showTenseMenu, setShowTenseMenu] = useState(false);
  return (
    <div className="w-full border-y-[0.4rem] border-l-[0.4rem] border-white">
      <div className="w-full flex h-[86px] justify-around border-b-[0.4rem] border-white">
        <div className="w-full flex justify-center items-center text-2xl text-white font-bold">
          Present Simple 1
        </div>
        <div className="flex">
          <button
            onClick={() => setShowTenseMenu(!showTenseMenu)}
            className="w-full h-full px-10 text-2xl text-white font-bold border-l-[0.4rem] border-white"
          >
            Tense
          </button>
          <button className="w-full h-full px-10 text-2xl text-white font-bold border-l-[0.4rem] border-white">
            Switch
          </button>
        </div>
      </div>
      <div className="lesson w-full h-full relative">
        {showTenseMenu && (
          <ul className="text-xl bg-purple-400 px-10 flex flex-col gap-2 absolute top-0 right-40 ">
            <li className="">Present</li>
            <li>Past</li>
            <li>Future</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Lesson;
