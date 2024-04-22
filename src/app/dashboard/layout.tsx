import "@/app/globals.css";
import SideNavbar from "@/components/dashboard/SideNavbar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className
        )}
      >
        {/* sidebar */}
        {/* <p className="border">Sidebar</p> */}
        <SideNavbar />
        {/* main page */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
