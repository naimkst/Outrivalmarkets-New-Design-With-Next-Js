import React from "react";
import { Footer } from "../components/Footer";

export const Layouts = ({ children }: any) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
