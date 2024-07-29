import Image from "next/image";
import "@/styles/dashboard/user-info.css";

export default function UserInfo() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-4">
        {/* IMAGE CONTAINER */}
        <div
          className="w-[120px] aspect-square rounded-full profileImage"
          style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
        ></div>
        <span className="text-[1.25rem] font-semibold text-runss-blue-color text-center">
          Sodimu Gbemiga
          <span className="text-sm">
            <br />
            @StudentID
          </span>
        </span>
        <div className="w-full flex gap-3">
          <div className="px-2 aspect-square rounded-lg bg-runss-blue-color grid place-items-center">
            <Image
              src="/assets/icons/class.svg"
              alt="Menu Icon"
              width={28}
              height={28}
              className="invert"
            />
          </div>
          <div className="flex-1">
            <span className="text-sm text-gray-500">Current Class</span>
            <br />
            <span className="font-medium">JSS 1</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3">
        <div className="w-full flex gap-3">
          <div className="px-2 aspect-square rounded-lg bg-runss-blue-color grid place-items-center">
            <Image
              src="/assets/icons/payment.svg"
              alt="Menu Icon"
              width={28}
              height={28}
              className="invert"
            />
          </div>
          <div className="flex-1">
            <span className="text-sm text-gray-500">Outstanding Fees</span>
            <br />
            <span className="font-medium text-red-600">NGN 0.00</span>
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="px-2 aspect-square rounded-lg bg-runss-blue-color grid place-items-center">
            <Image
              src="/assets/icons/payment.svg"
              alt="Menu Icon"
              width={28}
              height={28}
              className="invert"
            />
          </div>
          <div className="flex-1">
            <span className="text-sm text-gray-500">Prev Session Debt</span>
            <br />
            <span className="font-medium text-red-600">NGN 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
