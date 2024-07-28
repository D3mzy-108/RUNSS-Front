import UserInfo from "@/components/Auth/UserInfo";
import NavBar from "@/components/Dashboard/NavBar";
import "@/styles/dashboard/navbar.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="w-full flex flex-wrap gap-4 relative">
          <NavBar></NavBar>

          <div className="w-full flex-1 py-3">{children}</div>

          <div className="w-[22rem] max-md:hidden h-screen sticky top-0 py-3 pr-3">
            <UserInfo></UserInfo>
          </div>
        </div>
      </body>
    </html>
  );
}
