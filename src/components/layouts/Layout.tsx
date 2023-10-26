import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


type Props = { children: React.ReactNode; title: string };
const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <Navbar />
      <div className="pt-[105px] border min-h-screen container mx-auto  max-xl:max-w-7xl">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default dynamic(Promise.resolve(Layout), { ssr: false });
