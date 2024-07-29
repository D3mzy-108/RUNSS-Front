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
        <div className="w-full flex flex-wrap gap-4 relative bg-gray-100">
          <NavBar></NavBar>

          <div className="w-full flex-1 lg:py-4 max-lg:px-2 min-h-screen">
            {children}
          </div>

          <div className="w-[20rem] max-lg:hidden h-screen sticky top-0 py-4 pr-4">
            <UserInfo></UserInfo>
          </div>
        </div>
      </body>
    </html>
  );
}
