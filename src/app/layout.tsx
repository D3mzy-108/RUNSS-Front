import type { Metadata } from "next";
import "@/styles/globals.css";
import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "RUNSS Student Payment Portal",
  description:
    "School fee payments and tracking. Quickly make payments, view payment history, and check outstanding balances. Manage your child's school finances effortlessly.",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body className="bg-[#fff]">{children}</body>
    </html>
  );
}
