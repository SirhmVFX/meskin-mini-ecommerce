import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";

function Productcard({ img, name, price }) {
  return (
    <>
      <div>
        <div className="md:h-[360px] h-[210px]">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-between py-3">
          <div>
            <h1 className="text-sm">{name}</h1>
            <p className="font-medium text-bold">{price}</p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <select name="" id="" className="rounded-lg bg-transparent text-xs">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <button className="bg-primarycolor flex gap-2 p-2 text-white rounded-full text-[7px] md:text-xs">
              <span className="md:block hidden">add to cart</span>
              <MdOutlineShoppingCart className="text-md" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
