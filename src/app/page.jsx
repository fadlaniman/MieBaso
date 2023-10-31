"use client";

import Navbar from "./assets/navbar";
import Footer from "./assets/footer";
import Image from "next/image";
import Order from "../../public/images/order.png";
import Delivery from "../../public/images/delivery.png";
import Courier from "../../public/images/courier.png";
import product_1 from "../../public/images/product-1.jpeg";
import product_2 from "../../public/images/product-2.jpeg";
import product_3 from "../../public/images/product-3.jpeg";
import product_4 from "../../public/images/product-4.jpeg";
import Link from "next/link";
import { RxExit } from "react-icons/rx";

const Product = [
  {
    nama: `Mie Baso Cincang`,
    deskripsi: `Baso besar cincang + Baso halus kecil 3 + Mie campur`,
    harga: 20000,
    file: product_1,
  },
  {
    nama: `Mie Baso Cincang + Baso Urat`,
    deskripsi: `Baso besar 2 + Baso kecil 1 + Mie campur`,
    harga: 26000,
    file: product_2,
  },
  {
    nama: `Mie Ayam Baso Cincang`,
    deskripsi: `Mie ayam + Baso besar cincang + Baso kecil`,
    harga: 24000,
    file: product_3,
  },
  {
    nama: `Mie Ayam Baso Urat`,
    deskripsi: `Baso Besar urat + Baso kecil 3 + Mie campur`,
    harga: 20000,
    file: product_4,
  },
];
export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <div className="bg-hero-pattern bg-cover bg-fixed px-7 xl:px-40 py-28 xl:py-40">
          <div className="grid gap-7">
            <h1 className="text-3xl font-bold xl:text-5xl xl:w-1/3 font-serif">
              Be The Fastest In Delivery Your
              <span className="text-blue-600"> Food </span>
            </h1>
            <h2 className=" text-stone-800 text-sm xl:w-1/3 xl:text-base font-medium">
              Selamat datang di Baso Japra, tempat di mana cita rasa lezat dan
              kualitas berkumpul dalam setiap gigitan!
            </h2>
            <Link
              href=""
              className="flex gap-2 px-3 py-2 bg-white rounded-full w-max"
            >
              <RxExit className="my-auto text-lg" />
              <span className="text-xs font-bold">Get Started</span>
            </Link>
          </div>
        </div>
        <section className="grid p-10 space-y-16">
          <div>
            {/* Section-1 */}
            <div className="">
              <div className="grid text-center font-medium">
                <h3 className="text-blue-300 text-sm xl:text-base">
                  How it works
                </h3>
                <h4 className="font-bold xl:text-lg">What We Serve</h4>
                <p className="text-stone-700 text-sm py-3 xl:text-base">
                  Product Quality Is Our Priority, And Always Guarantees Halal
                  And Safety Until Is In Your Hands.
                </p>
              </div>
            </div>
            <div className="grid py-7 space-y-7 xl:flex xl:justify-evenly">
              <div className="grid text-center gap-3">
                <Image src={Order} alt={Order} className="w-1/3 m-auto " />
                <h4 className="font-bold">Easy To Order</h4>
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
                <h4 className="font-bold">Fastest Delivery</h4>
                <p className="text-sm text-stone-700 font-medium">
                  Delivery will be on time
                </p>
              </div>
              <div className="grid text-center gap-3">
                <Image src={Courier} alt={Courier} className="w-1/3 m-auto" />
                <h4 className="font-bold">Best Quality</h4>
                <p className="text-sm text-stone-700 font-medium">
                  The best quality of food for you
                </p>
              </div>
            </div>
          </div>
          {/* Section-2 */}
          <div>
            <div className="grid font-medium text-center">
              <h1 className="text-blue-300 text-sm xl:text-base">Our menu</h1>
              <h3 className="font-bold xl:text-lg">Our Popular Menu</h3>
              <p className="text-stone-700 text-sm py-3 xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                fugit quam aut laudantium in aliquam totam.
              </p>
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
                <div className="grid space-y-2 text-sm py-3 px-7">
                  <h3 className="font-bold">{val.nama}</h3>
                  <p className="font-medium text-stone-700">{val.deskripsi}</p>
                </div>
                <div className="px-7">
                  <span className="font-bold">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(val.harga)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Section-4 */}
        <div className="mx-5 my-12 bg-banner-pattern bg-cover rounded-md xl:mx-40">
          <div className="grid bg-black bg-opacity-70 gap-5 px-20 py-7 rounded-md xl:py-20 xl:gap-10">
            <h3 className="text-white font-bold text-center xl:text-2xl mx-auto">
              Join our member and get discount up to 50%
            </h3>
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
    </div>
  );
}
