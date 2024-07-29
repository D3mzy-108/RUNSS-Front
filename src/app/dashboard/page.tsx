"use client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  router.push("/dashboard/payment/");
  return <div className="w-full"></div>;
}
