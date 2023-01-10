import React from "react";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export const Layouts = ({ children }: any) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
