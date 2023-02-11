import Image from "next/image";
import React from "react";

const SideNav = () => {
  return (
    <div className="mx-2 bg-white">
      <div className="mb-2 pb-3 bg-cyan-200 border-2 rounded-md">
        <Image src="/profile.jpg" width={120} height={100}></Image>
      </div>
      <div className="question-pallete h-64 border-2 rounded-md bg-cyan-200">
        <h2 className="bg-sky-400 text-white rounded-sm">Question Pallete</h2>

        <div className="grid grid-cols-5 gap-1 ">
          <button className="btn btn-xs rounded-none btn-success ">2</button>
          <button className="btn btn-xs rounded-none  btn-error">3</button>
          <button className="btn btn-xs rounded-none  btn-success">1</button>
          <button className="btn btn-xs rounded-none  btn-success">4</button>
          <button className="btn btn-xs rounded-none  btn-error">5</button>
          <button className="btn btn-xs rounded-none btn-warning ">6</button>
          <button className="btn btn-xs rounded-none btn-success ">7</button>
          <button className="btn btn-xs rounded-none  bg-white text-black">
            8
          </button>
          <button className="btn btn-xs rounded-none btn-primary ">9</button>
          <button className="btn btn-xs rounded-none bg-slate-500 text-white ">
            10
          </button>
        </div>
      </div>
      <div className="mt-2 rounded-md border-1">
        <h2 className="bg-sky-400 p-1 text-white">Legent(Click to View)</h2>
        <div className="grid grid-cols-2 gap-2  bg-white text-sm border rounded-md">
          <button className="btn-accent text-[10px] btn btn-xs rounded-none">
            {" "}
            4 Answer
          </button>
          <button className="  btn-error btn btn-xs text-[10px] rounded-none">
            2 No Answer
          </button>
          <button className="  btn-primary btn btn-xs text-[10px] rounded-none">
            1 Review + Ans
          </button>
          <button className="  btn-warning btn btn-xs text-[10px] rounded-none">
            1 Review - Answer
          </button>
          <button className=" btn btn-xs text-[10px] bg-slate-500 text-white rounded-none">
            1 Dump
          </button>
          <button className="bg-white text-slate-700 btn btn-xs text-[10px] rounded-none">
            No Visit
          </button>
        </div>
        <div className="bg-cyan-200 pb-3">
          <button className="bg-sky-400 p-1 w-full text-center text-black">
            10 All Questions
          </button>
        </div>
        <div className="bg-cyan-200 py-2 grid grid-cols-2 text-white gap-1">
          <button className="btn btn-xs btn-info text-white  rounded-none">
            Profile
          </button>
          <button className="btn btn-xs btn-info text-white  rounded-none">
            Instr
          </button>
          <button className="btn btn-xs btn-info text-white  rounded-none">
            Questions
          </button>
          <button className="btn btn-xs btn-info text-white  rounded-none">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
