import { formatNumberWithCommas } from "@/utils/numberFormatter";

interface PaymentSummaryInterface {
  totalFee: number;
  amountPaid: number;
  outstandingFees: number;
  prevSessionDebt: number;
}

export default function PaymentSummary(props: {
  summary: PaymentSummaryInterface;
}) {
  const summary = props.summary;

  return (
    <section className="w-full px-4 pt-4 pb-5 bg-gradient-to-tl from-runss-blue-color to-runss-second-blue-color shadow-lg rounded-xl">
      <legend className="text-md font-[700] text-gray-100 mb-4">
        Payment Summary
      </legend>
      {/* FEES SUMMARY */}
      <div className="w-full flex overflow-auto gap-5 px-3">
        <div className="w-full min-w-fit md:flex-1 text-start">
          <span className="text-sm text-gray-300">Total Fee</span>
          <br />
          <span className="text-white font-[700] text-lg">
            {formatNumberWithCommas(summary.totalFee)}
            <span className="text-sm text-gray-300"> (₦)</span>
          </span>
        </div>
        <div className="w-full min-w-fit md:flex-1 text-start">
          <span className="text-sm text-gray-300">Amount Paid</span>
          <br />
          <span className="text-white font-[700] text-lg">
            {formatNumberWithCommas(summary.amountPaid)}
            <span className="text-sm text-gray-300"> (₦)</span>
          </span>
        </div>
        <div className="w-full min-w-fit md:flex-1 text-start">
          <span className="text-sm text-gray-300">Outstanding Fees</span>
          <br />
          <span className="text-red-200 font-[700] text-lg">
            {formatNumberWithCommas(summary.outstandingFees)}
            <span className="text-sm text-gray-300"> (₦)</span>
          </span>
        </div>
        <div className="w-full min-w-fit md:flex-1 text-start">
          <span className="text-sm text-gray-300">Prev Session Debt</span>
          <br />
          <span className="text-red-200 font-[700] text-lg">
            {formatNumberWithCommas(summary.prevSessionDebt)}
            <span className="text-sm text-gray-300"> (₦)</span>
          </span>
        </div>
      </div>
    </section>
  );
}
