const { default: Image } = require("next/image");

function Checkoutcard({ img, name, price }) {
  return (
    <>
      <div className="flex gap-4">
        <div className="w-[100px] h-[100px]">
          <Image
            src={img}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            alt="i"
          />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
export default Checkoutcard;
