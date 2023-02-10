import Image from "next/image";
import React from "react";

const Physics = () => {
  return (
    <div className="my-2">
      <header className="bg-sky-500 py-3 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Question No: 01</h2>
          <select className="select bg-white text-slate-800 w-28 mx-2 max-w-xs">
            <option selected>English</option>
            <option>Bangla</option>
            <option>Hindi</option>
          </select>
        </div>
      </header>
      <section className="grid bg-white text-slate-700 my-2 border-2 rounded-md grid-cols-2 ">
        <div className=" border-2">
          <h2 className="text-2xl font-bold border-2 px-2 text-cyan-500">
            Question Instruction
          </h2>
          <p className="p-3">
            Passager you want to hit a small box on the floor with a marble
            fired from a spring-loaded gun that is mounted on a table.The target
            box is a distance R horizontally from the edge of the table; see the
            figure to the right. LYou compress the spring a distance d, but the
            center of the marbel falls short by a distance r of the center of
            the box. How far should you compress the spring to score a direct
            hit (neglect friction)?
          </p>
        </div>
        <div className="flex flex-col border-2">
          <h4 className="text-2xl px-2 font-bold border-2 text-cyan-500">
            Question
          </h4>
          <p className="p-3 ">
            A block of mass m is projected with velocity V<sub>0</sub> as shown
            in the fig. The distance between free ends is l<sub>0</sub>. Maximum
            displacement of the block during the motion.
          </p>
          <div className="my-2">
            <Image src="/phy-figure1.png" width={160} height={100}></Image>
          </div>
        </div>
      </section>
      <section className="flex justify-start flex-grow">
        <button className="btn btn-sm btn-accent focus:bg-yellow-500 mr-2">
          Review
        </button>
        <button className="btn btn-sm btn-accent mr-2 focus:bg-white focus:text-black">
          Dump
        </button>
        <button className="btn btn-sm btn-accent mr-2">Previous</button>
        <button className="btn btn-sm btn-accent mr-2">Clear Response</button>
        <button className="btn btn-sm btn-accent focus:bg-green-600">
          Next
        </button>
      </section>
    </div>
  );
};

export default Physics;
