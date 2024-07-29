"use client";
import { formatNumberWithCommas } from "@/utils/numberFormatter";
import { useState, useEffect } from "react";

export default function Payment() {
  const [summary, setSummary] = useState({
    totalFee: 50000,
    amountPaid: 30000,
    outstandingFees: 13500,
    prevSessionDebt: 6500,
  });
  const [payAmount, setPayAmount] = useState(0.0);

  const handleMakePayment = (event: any) => {
    event.preventDefault();

    alert(`Paid: ₦${formatNumberWithCommas(payAmount)}`);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* PAYMENT SUMMARY SECTION */}
      <section className="w-full px-4 pt-4 pb-5 bg-white shadow-lg rounded-xl">
        <legend className="text-md font-semibold text-runss-blue-color mb-3">
          Payment Summary
        </legend>
        {/* FEES SUMMARY */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="w-full text-center">
            <span className="text-sm text-gray-500">Total Fee</span>
            <br />
            <span className="font-semibold text-lg">
              {formatNumberWithCommas(summary.totalFee)}
              <span className="text-sm text-gray-500"> (₦)</span>
            </span>
          </div>
          <div className="w-full text-center">
            <span className="text-sm text-gray-500">Amount Paid</span>
            <br />
            <span className="font-semibold text-lg">
              {formatNumberWithCommas(summary.amountPaid)}
              <span className="text-sm text-gray-500"> (₦)</span>
            </span>
          </div>
          <div className="w-full text-center">
            <span className="text-sm text-gray-500">Outstanding Fees</span>
            <br />
            <span className="text-red-600 font-semibold text-lg">
              {formatNumberWithCommas(summary.outstandingFees)}
              <span className="text-sm text-gray-500"> (₦)</span>
            </span>
          </div>
          <div className="w-full text-center">
            <span className="text-sm text-gray-500">Prev Session Debt</span>
            <br />
            <span className="text-red-600 font-semibold text-lg">
              {formatNumberWithCommas(summary.prevSessionDebt)}
              <span className="text-sm text-gray-500"> (₦)</span>
            </span>
          </div>
        </div>
        <form
          onSubmit={handleMakePayment}
          className="w-full mt-6 max-w-lg mx-auto"
        >
          <div className="w-full flex border border-runss-blue-color/75 rounded-lg overflow-clip">
            <div className="w-full flex-1 relative py-2 px-4 bg-white">
              <input
                type="number"
                step={0.01}
                min={1}
                value={payAmount}
                onChange={(e: any) => {
                  var value: string = (e.target as HTMLInputElement).value;
                  if (value == "") {
                    value = "0";
                  }
                  if (
                    parseFloat(value) >
                    summary.outstandingFees + summary.prevSessionDebt
                  ) {
                    value = `${
                      summary.outstandingFees + summary.prevSessionDebt
                    }`;
                  }
                  setPayAmount(parseFloat(value));
                }}
                className="w-full bg-white font-medium text-lg border-none outline-none"
              />
              <div className="w-full bg-white rounded-l-lg font-medium text-lg pointer-events-none absolute left-0 top-0 py-2 px-4">
                {formatNumberWithCommas(payAmount)}
              </div>
            </div>
            <button
              type="submit"
              className="border-none outline-none bg-runss-second-blue-color hover:bg-runss-blue-color p-3 text-white text-sm"
            >
              Make Payment
            </button>
          </div>
        </form>
      </section>

      <section className="w-full px-4 pt-4 pb-5 bg-white shadow-lg rounded-xl">
        <legend className="text-md font-semibold text-runss-blue-color mb-3">
          Payable Fees
        </legend>
      </section>
    </div>
  );
}
