import Navbar from "./assets/navbar";
import Footer from "./assets/footer";
import Image from "next/image";
import Order from "../../public/images/order.png";
import Delivery from "../../public/images/delivery.png";
import Courier from "../../public/images/courier.png";
import product from "../../public/images/product.png";
import Link from "next/link";
import { RxExit } from "react-icons/rx";

export default function Home() {
  const Product = [
    {
      nama: "Baso Urat",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      harga: 12000,
      file: product,
    },
    {
      nama: "Baso Cincang",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      harga: 15000,
      file: product,
    },
    {
      nama: "Baso Beranak",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      harga: 30000,
      file: product,
    },
    {
      nama: "Mie Ayam Baso",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      harga: 13000,
      file: product,
    },
  ];
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="bg-hero-pattern bg-cover bg-fixed px-7 xl:px-40 py-28 xl:py-40">
          <div className="grid gap-7">
            <h3 className="text-3xl font-bold xl:text-5xl xl:w-1/3 font-serif">
              Be The Fastest In Delivery Your
              <span className="text-blue-600"> Food </span>
            </h3>
            <h5 className=" text-stone-800 text-sm w-2/3 xl:w-1/4 xl:text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam recusandae necessitatibus asperiores dolores vitae.
            </h5>
            <Link
              href=""
              className="flex gap-2 px-3 py-2 bg-white rounded-full w-max"
            >
              <RxExit className="my-auto text-lg" />
              <span className="text-xs font-bold">Get Started</span>
            </Link>
          </div>
        </div>
        <div className="grid px-10 py-20 space-y-16">
          <div>
            {/* Section-1 */}
            <div className="">
              <div className="grid text-center font-medium">
                <h5 className="text-blue-500 text-sm xl:text-base">
                  How it works
                </h5>
                <h4 className="font-bold xl:text-lg">What We Serve</h4>
                <h6 className="text-stone-700 text-sm py-3 xl:text-base">
                  Product Quality Is Our Priority, And Always Guarantees Halal
                  And Safety Until Is In Your Hands.
                </h6>
              </div>
            </div>
            <div className="grid py-7 space-y-7 xl:flex xl:justify-evenly">
              <div className="grid text-center gap-3">
                <Image src={Order} alt={Order} className="w-1/3 m-auto " />
                <h6 className="font-bold">Easy To Order</h6>
                <p className="text-sm text-stone-700 font-medium">
                  You only order through the app
                </p>
              </div>
              <div className="grid text-center gap-3">
                <Image
                  src={Delivery}
                  alt={Delivery}
                  className="w-1/3 m-auto "
                />
                <h6 className="font-bold">Fastest Delivery</h6>
                <p className="text-sm text-stone-700 font-medium">
                  Delivery will be on time
                </p>
              </div>
              <div className="grid text-center gap-3">
                <Image src={Courier} alt={Courier} className="w-1/3 m-auto" />
                <h6 className="font-bold">Best Quality</h6>
                <p className="text-sm text-stone-700 font-medium">
                  The best quality of food for you
                </p>
              </div>
            </div>
          </div>
          {/* Section-2 */}
          <div>
            <div className="grid font-medium text-center">
              <h5 className="text-blue-500 text-sm xl:text-base">Our menu</h5>
              <h4 className="font-bold xl:text-lg">Our Popular Menu</h4>
              <h6 className="text-stone-700 text-sm py-3 xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                fugit quam aut laudantium in aliquam totam.
              </h6>
            </div>
          </div>
          {/* Section-3 */}
          <div className="grid xl:grid-cols-4 xl:justify-center gap-5 xl:px-60">
            {Product.map((val, index) => (
              <div className="grid justify-center" key={index}>
                <div>
                  <Image
                    src={val.file}
                    alt={val.file}
                    className="w-1/2 mx-auto"
                  />
                </div>
                <div className="grid space-y-2 text-sm py-3 px-5">
                  <h3 className="font-bold">{val.nama}</h3>
                  <h5 className="font-medium text-stone-700">
                    {val.deskripsi}
                  </h5>
                </div>
                <div className="px-5">
                  <h2 className="font-bold">Rp. {val.harga}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Section-4 */}
        <div className="mx-5 my-12 bg-banner-pattern bg-cover rounded-md xl:mx-40">
          <div className="grid bg-black bg-opacity-70 gap-5 px-20 py-7 rounded-md xl:py-20 xl:gap-10">
            <h5 className="text-white font-bold text-center xl:text-3xl xl:w-1/3 mx-auto">
              Join our member and get discount up to 50%
            </h5>
            <Link
              href=""
              className="flex gap-2 px-5 py-2 bg-white rounded-full w-max mx-auto"
            >
              <RxExit className="my-auto text-lg " />
              <span className="text-xs font-bold">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
