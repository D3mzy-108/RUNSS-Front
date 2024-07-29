import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "RUNSS Student Payment Portal",
  description:
    "School fee payments and tracking. Quickly make payments, view payment history, and check outstanding balances. Manage your child's school finances effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fff]">{children}</body>
    </html>
  );
}
