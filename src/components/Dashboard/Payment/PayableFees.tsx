import { formatNumberWithCommas } from "@/utils/numberFormatter";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

interface PayableFeesInterface {
  feeTitle: string;
  cost: number;
  isPaid: boolean;
  isSelected: boolean;
}

export default function PayableFees(props: {
  payableFees: [
    Array<PayableFeesInterface>,
    Dispatch<SetStateAction<Array<PayableFeesInterface>>>
  ];
  maxPayableAmount: number;
}) {
  const [payAmount, setPayAmount] = useState(0.0);
  const [allSelected, setAllSelected] = useState(false);
  const [fees, setFees] = props.payableFees;

  const handleMakePayment = (event: any) => {
    event.preventDefault();

    if (payAmount == 0) {
      return;
    }
    alert(`Paid: ₦${formatNumberWithCommas(payAmount)}`);
  };
  return (
    <section className="w-full py-6 rounded-xl">
      <div className="w-full mb-4 flex gap-2">
        <div className="flex-1">
          <legend className="text-md font-[700] text-runss-blue-color">
            Payable Fees
          </legend>
          <span className="text-sm text-gray-500">
            Select items for immediate payment.
          </span>
        </div>
        <div className="flex gap-[3px] w-fit items-center">
          <input
            type="checkbox"
            name="selectAll"
            id="selectAll"
            checked={allSelected}
            onChange={(e: any) => {
              setAllSelected(true);
              var newFees = fees;
              var totalCost = 0.0;
              newFees.map((fee) => {
                fee.isSelected = true;
                totalCost += fee.cost;
              });
              setFees(newFees);
              setPayAmount(totalCost);
            }}
          />
          <label htmlFor="selectAll" className="text-sm">
            Select All
          </label>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
        {/* PAYABLE FEE LIST ITEM */}
        {fees.map((fee, index) => {
          return (
            <label
              key={index}
              htmlFor={`selectFee${index}`}
              className="w-full py-3 px-5 rounded-lg border bg-white shadow-lg hover:shadow-md flex max-sm:flex-col items-start gap-3 cursor-pointer duration-200"
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
                checked={fee.isSelected}
                onChange={(e: any) => {
                  fee.isSelected = (e.target as HTMLInputElement).checked;
                  if (fee.isSelected) {
                    setPayAmount(payAmount + fee.cost);
                  } else {
                    setPayAmount(payAmount - fee.cost);
                    setAllSelected(false);
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
