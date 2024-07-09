import Image from "next/image";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="md:p-20 p-10 bg-[#FFB07C] ">
        <div className="md:w-5/6 mx-auto md:px-0">
          <div className="md:flex justify-between">
            <div>
              <div className="w-24 h-full">
                <Image
                  src={"/logo.png"}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-contain"
                  alt="lgo"
                />
              </div>
              <p>Natural ingredients. Paraben free</p>
            </div>

            <div>
              <h1>Contact us</h1>
              <p>meskincare@gmail.com</p>
            </div>

            <div>
              <h1>Connect</h1>
              <div>
                <MdFacebook />
              </div>
            </div>
          </div>

          <div className="flex justify-between py-12">
            <Link href={"/"}>Refund Policy </Link>
            <Link href={"/"}>Shipping Policy </Link>
            <Link href={"/"}>Privacy Policy </Link>
            <Link href={"/"}>Terms Policy </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Footer;
