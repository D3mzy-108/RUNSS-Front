import { formatNumberWithCommas } from "@/utils/numberFormatter";
import { useState, useEffect } from "react";

interface PayableFeesInterface {
  feeTitle: string;
  cost: number;
}

export default function PayableFees(props: {
  fees: Array<PayableFeesInterface>;
  maxPayableAmount: number;
}) {
  const [payAmount, setPayAmount] = useState(0.0);

  const handleMakePayment = (event: any) => {
    event.preventDefault();

    if (payAmount == 0) {
      return;
    }
    alert(`Paid: ₦${formatNumberWithCommas(payAmount)}`);
  };
  return (
    <section className="w-full py-6 rounded-xl">
      <legend className="text-md font-[700] text-runss-blue-color mb-4">
        Payable Fees
      </legend>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
        {/* PAYABLE FEE LIST ITEM */}
        {props.fees.map((fee, index) => {
          return (
            <label
              key={index}
              htmlFor={`selectFee${index}`}
              className="w-full py-3 px-5 rounded-lg border bg-white shadow-lg hover:shadow-md flex max-sm:flex-col items-start sm:items-center gap-3 cursor-pointer duration-200"
            >
              <div className="w-full sm:flex-1">
                <span className="font-semibold text-[#333]">
                  {fee.feeTitle}
                </span>
                <br />
                <span className="text-sm text-gray-600">
                  <span className="text-xs">₦</span>
                  {formatNumberWithCommas(fee.cost)}
                </span>
              </div>
              <input
                type="checkbox"
                name={`selectFee${index}`}
                id={`selectFee${index}`}
                onChange={(e: any) => {
                  var val: boolean = (e.target as HTMLInputElement).checked;
                  if (val) {
                    setPayAmount(payAmount + fee.cost);
                  } else {
                    setPayAmount(payAmount - fee.cost);
                  }
                }}
              />
            </label>
          );
        })}
      </div>
      <form
        onSubmit={handleMakePayment}
        className="w-fit mt-6 max-w-lg mx-auto sticky bottom-4"
      >
        <div className="w-fit flex border rounded-lg overflow-clip shadow-lg">
          <div className="w-fit relative py-3 px-5 bg-white font-semibold text-lg">
            <span className="text-sm">₦</span>
            {formatNumberWithCommas(payAmount)}
          </div>
          <button
            type="submit"
            className="border-none outline-none bg-runss-second-blue-color hover:bg-runss-blue-color p-3 px-4 text-white text-sm rounded-lg font-semibold"
          >
            Pay Now
          </button>
        </div>
      </form>
    </section>
  );
}
