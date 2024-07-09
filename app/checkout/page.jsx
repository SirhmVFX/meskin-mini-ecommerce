import Checkoutcard from "@/components/Checkoutcard";
import { products } from "@/data";
import Image from "next/image";
import Link from "next/link";

function Checkout() {
  return (
    <>
      <div>
        <div className="py-4 flex justify-between border-b border-gray-200">
          <h1>Details</h1>

          <h1>Order Summary</h1>
        </div>

        <div className="md:flex gap-6">
          <div className="md:w-8/12 flex-col flex gap-6">
            <h1>Delivery</h1>

            <div>
              <div className="flex justify-between bg-orange-200 p-4 border border-gray-200">
                <div className="flex items-center gap-2 ">
                  <input type="radio" className="text-primarycolor" />
                  <h1>Ship</h1>

                  <p>(Delivered within 5-10 working days)</p>
                </div>{" "}
                <div className="w-[30px] h-[30px]">
                  <Image
                    src={"/ico1.png"}
                    width={1000}
                    height={1000}
                    alt="t"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-between p-4 border border-gray-200">
                <div className="flex items-center gap-2 ">
                  <input type="radio" className="text-primarycolor" />
                  <h1>pick up in store</h1>
                </div>{" "}
                <div className="w-[30px] h-[30px]">
                  <Image
                    src={"/ico2.png"}
                    width={1000}
                    height={1000}
                    alt="t"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="py-6 flex flex-col gap-6">
                <h1>Shipping address</h1>

                <form action="" className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Full name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="p-4 bg-transparent border border-gray-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      placeholder="Janedoe@gmail.com"
                      className="p-4 bg-transparent border border-gray-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Country/Region</label>
                    <input
                      type="text"
                      placeholder="Nigeria"
                      className="p-4 bg-transparent border border-gray-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Address</label>
                    <input
                      type="text"
                      placeholder=""
                      className="p-4 bg-transparent border border-gray-200"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">City</label>
                      <input
                        type="text"
                        placeholder=""
                        className="p-4 bg-transparent border border-gray-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">State</label>
                      <input
                        type="text"
                        placeholder=""
                        className="p-4 bg-transparent border border-gray-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="">Postal Code</label>
                      <input
                        type="text"
                        placeholder=""
                        className="p-4 bg-transparent border border-gray-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="p-4 bg-transparent border border-gray-200"
                    />
                  </div>
                  <Link
                    href={"/"}
                    className="w-full text-center bg-primarycolor p-4 text-white"
                  >
                    Pay Now
                  </Link>
                </form>
              </div>
            </div>
          </div>

          <div className="md:w-4/12 flex flex-col gap-6 py-4">
            <div className="flex flex-col gap-4">
              {products.slice(0, 3).map((p) => (
                <Checkoutcard key={p.id} {...p} />
              ))}
            </div>

            <div className="flex justify-between">
              <div>
                <p>Subtotal</p>
                <p>Shipping Fee</p>
                <p>VAT</p>
                <p>TOTAL</p>
              </div>
              <div>
                <p className="text-right">N49,500</p>
                <p className="text-right">N2,000</p>
                <p className="text-right">N3,850</p>
                <p className="text-right">N55,400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
