import Notification from "@/components/Notification";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/global.css";
import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jakubnalewajk.com",
  description: "Front-end developer portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx("w-screen h-screen overflow-x-hidden", inter.className)}
      >
        <main className="flex items-center flex-col">{children}</main>
        <Notification />
      </body>
    </html>
  );
}
