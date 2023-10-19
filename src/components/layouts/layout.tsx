import Header from "./Header";
import React from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";

type Props = { children: React.ReactNode; title: string };
const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <Header />
      <div className="pt-[70px] min-h-screen container mx-auto max-w-7xl">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default dynamic(Promise.resolve(Layout), { ssr: false });
