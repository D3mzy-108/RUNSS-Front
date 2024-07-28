"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState("");
  const [imageSize, setImageSize] = useState({ width: 250, height: 200 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      setImageSize({
        width: window.innerWidth > 540 ? 250 : 190,
        height: window.innerWidth > 540 ? 170 : 110,
      });
    }
  }, []);

  const toggleUserInfo = (event: Event) => {};
  const navLinks = [
    ["/dashboard/payment", "Make Payment", "/assets/icons/payment.svg"],
    ["/dashboard", "Payment History", "/assets/icons/payments.svg"],
  ];

  return (
    <div className="w-full lg:w-[18rem] lg:h-screen lg:overflow-auto bg-white lg:bg-[#00243E] sticky top-0">
      <div className="w-full flex items-center gap-3 p-3">
        <details className="rounded-lg shadow-md shadow-gray-300 border-none outline-none lg:hidden">
          <summary className="px-2 aspect-square grid place-items-center">
            <Image
              src="/assets/icons/menu.svg"
              alt="Menu Icon"
              width={28}
              height={28}
            />
          </summary>
          <ul className="py-2 px-1 bg-white rounded-lg w-[220px] shadow-lg">
            {navLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  <a
                    href={navLink[0]}
                    className="w-full p-2 flex gap-3 hover:bg-gray-100"
                  >
                    <Image
                      src={navLink[2]}
                      alt="Menu Icon"
                      width={26}
                      height={26}
                    />
                    {navLink[1]}
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
        <div className="flex-1 flex max-lg:justify-center max-lg:-mt-2">
          <Image
            src="/assets/images/logo.png"
            alt="RUNSS Logo"
            width={imageSize.width}
            height={imageSize.height}
            className="drop-shadow-lg"
          />
        </div>
        <button
          type="button"
          onClick={(e: any) => toggleUserInfo(e)}
          className="px-2 aspect-square rounded-lg shadow-md shadow-gray-300 border-none outline-none lg:hidden"
        >
          <Image
            src="/assets/icons/profile.svg"
            alt="Menu Icon"
            width={28}
            height={28}
          />
        </button>
      </div>
      <div className="w-full mt-4 max-lg:hidden">
        <ul className="py-3 px-4 flex flex-col gap-2">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a
                  href={navLink[0]}
                  className={`w-full p-3 flex items-center gap-3 rounded-lg text-white ${
                    currentPath == navLink[0]
                      ? "bg-runss-blue-color"
                      : "bg-transparent"
                  }`}
                >
                  <Image
                    src={navLink[2]}
                    alt="Menu Icon"
                    width={28}
                    height={28}
                    className="invert"
                  />
                  {navLink[1]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
