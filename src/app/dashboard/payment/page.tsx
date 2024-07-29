"use client";
import PayableFees from "@/components/Dashboard/Payment/PayableFees";
import PaymentSummary from "@/components/Dashboard/Payment/PaymentSummary";
import { useState, useEffect } from "react";

export default function Payment() {
  const [summary, setSummary] = useState({
    totalFee: 50000,
    amountPaid: 30000,
    outstandingFees: 13500,
    prevSessionDebt: 6500,
  });

  const [payableFees, setPayableFees] = useState([
    {
      feeTitle: "Tuition Fee",
      cost: 25000,
    },
    {
      feeTitle: "Registration Fee",
      cost: 2500,
    },
    {
      feeTitle: "Medical Fees",
      cost: 15000,
    },
    {
      feeTitle: "Accommodation",
      cost: 5000,
    },
    {
      feeTitle: "Development Levy",
      cost: 2500,
    },
  ]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* PAYMENT SUMMARY SECTION */}
      <PaymentSummary summary={summary} />

      <PayableFees
        fees={payableFees}
        maxPayableAmount={summary.outstandingFees + summary.prevSessionDebt}
      />
    </div>
  );
}
