import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="grid bg-blue-300 ">
      <div className="grid xl:grid-flow-col py-12 px-5 gap-10 xl:px-40">
        <div className="grid space-y-5">
          <div className="flex space-x-1">
            <div className="my-auto">
              <Image
                className="w-10"
                src="/images/logo.png"
                alt="/images/logo.png"
                height={500}
                width={500}
              />
            </div>
            <h1 className="my-auto font-libre-baskerville text-lg">MieBaso</h1>
          </div>
          <div>
            <p className="text-sm font-medium italic xl:w-1/2 w-2/3">
              Kota Pematangsiantar
            </p>
          </div>
          <div className="flex gap-3">
            <Link className="p-2 bg-white rounded-full" href="">
              <BsInstagram className="text-sm" />
            </Link>
            <Link className="p-2 bg-white rounded-full" href="">
              <BsTwitter className="text-sm" />
            </Link>
            <Link className="p-2 bg-white rounded-full" href="">
              <BsFacebook className="text-sm" />
            </Link>
          </div>
        </div>
        <div className="grid text-sm space-y-5">
          <h3 className="font-bold">Company</h3>
          <div className="grid gap-3">
            <Link href="">About Us</Link>
            <Link href="">Career</Link>
            <Link href="">How It Work</Link>
          </div>
        </div>

        <div className="grid text-sm space-y-5">
          <h3 className="font-bold">Policy</h3>
          <div className="grid gap-3">
            <Link href="">FAQ</Link>
            <Link href="">Privacy</Link>
            <Link href="">Shipping</Link>
          </div>
        </div>
        <div className="grid text-sm space-y-5">
          <h3 className="font-bold">Get In Touch</h3>
          <div className="grid gap-3">
            <Link href="">+62 852 7711 4433</Link>
            <Link href="">miebaso@example.com</Link>
          </div>
        </div>
      </div>
      <div className="grid mx-5 border-t border-black p-7 xl:mx-40">
        <p className="text-center text-xs text-black font-medium">
          ©2023 MieBaso.
          <span className="uppercase"> all right reserved</span>
        </p>
      </div>
    </div>
  );
}
