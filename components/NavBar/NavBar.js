import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-sky-300 ">
        <div className="avatar">
          <div className="w-20 rounded mr-2">
            <Image src="/logo.webp" width={160} height={100} alt="logo" />
          </div>
        </div>

        <h1 className="text-2xl text-white">
          Online <sub className="text-orange-700 ml-1">Judge</sub>
        </h1>
      </div>
    </div>
  );
};

export default NavBar;
