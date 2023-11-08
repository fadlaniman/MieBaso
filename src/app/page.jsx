"use client";

import Navbar from "./assets/navbar";
import Footer from "./assets/footer";
import Image from "next/image";
import Link from "next/link";
import { RxExit } from "react-icons/rx";

const Product = [
  {
    nama: `Mie Baso Cincang`,
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    harga: 20000,
    file: "/images/product.jpg",
  },
  {
    nama: `Mie Baso Urat`,
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    harga: 26000,
    file: "/images/product.jpg",
  },
  {
    nama: `Mie Ayam Baso Cincang`,
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    harga: 24000,
    file: "/images/product.jpg",
  },
  {
    nama: `Mie Ayam Baso Urat`,
    deskripsi: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    harga: 20000,
    file: "/images/product.jpg",
  },
];
export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="bg-hero-pattern bg-cover bg-fixed">
          <section className="grid gap-7 xl:px-40 xl:py-60 px-7 py-40">
            <h1 className="font-bold xl:text-6xl text-4xl xl:w-1/3 font-serif text-neutral-900">
              Be The Fastest In Delivery Your
              <span className="text-white"> Food </span>
            </h1>
            <h2 className=" text-neutral-900 text-sm xl:w-1/3 xl:text-base font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              nihil et dolores expedita magni sed.
            </h2>
            <Link
              href=""
              className="flex gap-2 px-3 py-2 bg-white rounded-full w-max"
            >
              <RxExit className="my-auto text-lg" />
              <span className="text-xs font-bold">Get Started</span>
            </Link>
          </section>
        </section>

        <section className="grid p-10 space-y-16 py-20 font-Cabin-text">
          <section>
            <div className="">
              <div className="grid text-center font-medium">
                <h3 className="text-blue-400 text-lg">How it works</h3>
                <h4 className="font-bold text-xl">What We Serve</h4>
                <p className="text-neutral-700 text-sm py-5 xl:text-base">
                  Product Quality Is Our Priority, And Always Guarantees Halal
                  And Safety Until Is In Your Hands.
                </p>
              </div>
            </div>
            <div className="grid py-7 space-y-7 xl:flex xl:justify-evenly">
              <div className="grid text-center gap-3">
                <Image
                  src="/images/order.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-1/3 m-auto "
                />
                <h4 className="font-bold">Easy To Order</h4>
                <p className="text-sm text-neutral-700 font-medium">
                  You only order through the app
                </p>
              </div>
              <div className="grid text-center gap-3">
                <Image
                  src="/images/delivery.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-1/3 m-auto "
                />
                <h4 className="font-bold">Fastest Delivery</h4>
                <p className="text-sm text-neutral-700 font-medium">
                  Delivery will be on time
                </p>
              </div>
              <div className="grid text-center gap-3">
                <Image
                  src="/images/courier.png"
                  alt="{Courier}"
                  className="w-1/3 m-auto"
                  width={500}
                  height={500}
                />
                <h4 className="font-bold">Best Quality</h4>
                <p className="text-sm text-neutral-700 font-medium">
                  The best quality of food for you
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="grid font-medium text-center">
              <h1 className="text-blue-400 text-lg">Our menu</h1>
              <h3 className="font-bold text-xl">Our Popular Menu</h3>
              <p className="text-neutral-700 text-sm py-5 xl:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                fugit quam aut laudantium in aliquam totam.
              </p>
            </div>
          </section>

          <section className="grid xl:grid-cols-4 xl:justify-center gap-5 xl:px-60">
            {Product.map((val, index) => (
              <div className="grid justify-center" key={index}>
                <div>
                  <Image
                    src={val.file}
                    alt={val.file}
                    width={500}
                    height={500}
                    className="w-1/2 mx-auto"
                  />
                </div>
                <div className="grid space-y-2 text-sm py-3 px-7">
                  <h3 className="font-bold">{val.nama}</h3>
                  <p className="font-medium text-neutral-700">
                    {val.deskripsi}
                  </p>
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
          </section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
