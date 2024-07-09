const { default: Image } = require("next/image");
const { MdDelete } = require("react-icons/md");

function Cartcard({ img, name, price }) {
  return (
    <>
      <div className="flex gap-4">
        <div className="w-3/12 md:h-[350px]">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-7/12 flex flex-col justify-between items-start">
          <div>
            <h1 className="md:text-3xl">{name}</h1>
            <p className="text-lg font-bold">{price}</p>
          </div>

          <select
            name=""
            id=""
            className="border bg-transparent border-primarycolor md:p-4"
          >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <div className="flex gap-2">
            <MdDelete />
            <p>remove from cart</p>
          </div>
        </div>

        <h1 className="font-bold md:text-2xl">{price}</h1>
      </div>
    </>
  );
}

export default Cartcard;
