"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import UserInfo from "../Auth/UserInfo";
import Link from "next/link";

export default function NavBar() {
  const [imageSize, setImageSize] = useState({ width: 250, height: 200 });
  const navLinks = [
    ["/dashboard/payment", "Make Payment", "/assets/icons/payment.svg"],
    [
      "/dashboard/payment/history",
      "Payment History",
      "/assets/icons/payments.svg",
    ],
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setImageSize({
        width: window.innerWidth > 540 ? 250 : 190,
        height: window.innerWidth > 540 ? 170 : 110,
      });
    }
  }, []);

  const openUserInfo = () => {
    const dialog = document.getElementById(
      "userInfoDialog"
    ) as HTMLDialogElement;
    dialog.showModal();
  };

  const closeUserInfo = () => {
    const dialog = document.getElementById(
      "userInfoDialog"
    ) as HTMLDialogElement;
    dialog.close();
  };

  return (
    <div className="w-full lg:w-[18rem] lg:h-screen lg:overflow-auto bg-white shadow-md max-lg:py-1 lg:bg-[#00243E] sticky top-0">
      <div className="w-full flex items-center gap-3 p-3">
        <details className="rounded-lg shadow-md shadow-gray-300 border-none outline-none lg:hidden">
          <summary className="bg-runss-blue-color px-2 aspect-square grid place-items-center rounded-lg">
            <Image
              src="/assets/icons/menu.svg"
              alt="Menu Icon"
              width={28}
              height={28}
              className="invert"
            />
          </summary>
          <ul className="py-2 px-1 bg-white rounded-lg w-[220px] shadow-lg">
            {navLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  <Link
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
                  </Link>
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
          onClick={openUserInfo}
          className="px-2 aspect-square rounded-lg shadow-md border-none outline-none lg:hidden"
        >
          <Image
            src="/assets/icons/profile.svg"
            alt="User Profile Icon"
            width={28}
            height={28}
          />
        </button>
      </div>

      {/* LARGE SCREEN NAV LINKS */}
      <div className="w-full mt-4 max-lg:hidden">
        <ul className="py-3 px-4 flex flex-col gap-2">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <Link
                  href={navLink[0]}
                  className={`w-full p-3 flex items-center gap-3 rounded-lg text-white`}
                >
                  <Image
                    src={navLink[2]}
                    alt="Menu Icon"
                    width={28}
                    height={28}
                    className="invert"
                  />
                  {navLink[1]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* USER INFO DIALOG */}
      <dialog
        id="userInfoDialog"
        className="place-self-center w-full max-w-md backdrop:bg-gray-100 outline-none"
      >
        <div className="w-full py-2 px-4 min-h-screen bg-gray-100 relative">
          <UserInfo></UserInfo>
          <button
            type="button"
            onClick={closeUserInfo}
            className="px-2 aspect-square rounded-lg border-none outline-none lg:hidden absolute top-4 right-4"
          >
            <Image
              src="/assets/icons/close.svg"
              alt="User Profile Icon"
              width={28}
              height={28}
            />
          </button>
        </div>
      </dialog>
    </div>
  );
}
