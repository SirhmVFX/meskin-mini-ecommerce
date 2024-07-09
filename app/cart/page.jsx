import Cartcard from "@/components/Cartcard";
import { products } from "@/data";

function Cart() {
  return (
    <>
      <div>
        <div className="justify-between flex py-6 border-b border-gray-200">
          <h1>Product</h1>
          <h1>Total</h1>
        </div>

        <div className="flex flex-col gap-16 py-6">
          {products.slice(0, 3).map((p) => (
            <Cartcard key={p.id} {...p} />
          ))}
        </div>

        <div className="py-6">
          <div className="flex justify-between">
            <h1 className="md:text-2xl">Sub total</h1>

            <h1 className="md:text-2xl">N49,500</h1>
          </div>
          <button className="w-full bg-primarycolor p-4 my-4 text-white">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
