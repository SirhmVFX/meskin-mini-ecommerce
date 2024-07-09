const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import { IoIosSearch, IoMdOptions } from "react-icons/io";

import { MdOutlineShoppingCart } from "react-icons/md";
function Header() {
  return (
    <>
      <div className="px-6 md:w-5/6 mx-auto flex justify-between items-center py-6">
        <div className="w-24 h-full">
          <Image
            src={"/logo.png"}
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
            alt="lgo"
          />
        </div>

        <div className="md:flex hidden gap-4">
          <Link href={"/"}>Home </Link>

          <Link href={"/"} className="font-bold">
            Shop{" "}
          </Link>
          <Link href={"/"}>About </Link>
          <Link href={"/"}>Contact </Link>
        </div>

        <div className="flex gap-4">
          <IoIosSearch />
          <Link href={"/cart"}>
            <MdOutlineShoppingCart />
          </Link>

          <IoMdOptions />
        </div>
      </div>
    </>
  );
}

export default Header;
