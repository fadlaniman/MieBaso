"use client";
import Image from "next/image";
import product from "../../../public/images/product.jpg";

export const Product = [
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
export default function shoppingCart() {
  return (
    <div className="px-5 xl:px-60 xl:py-40 py-28">
      <div className="text-center">
        <h1 className="text-xl font-medium">Menu</h1>
      </div>
      <div className="grid xl:grid-cols-4 xl:justify-center gap-5 py-9">
        {Product.map((val, index) => (
          <div className="grid justify-center" key={index}>
            <div>
              <Image src={val.file} alt={val.file} className="w-1/3 m-auto " />
            </div>
            <div className="grid space-y-2 text-sm py-3 px-7">
              <h3 className="font-bold">{val.nama}</h3>
              <p className="font-medium text-stone-700">{val.deskripsi}</p>
            </div>
            <div className="flex justify-between px-7">
              <h3 className="font-bold my-auto">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(val.harga)}
              </h3>
              <button className="text-sm bg-blue-300 shadow-sm py-1 px-3 rounded-sm cursor-pointer">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
