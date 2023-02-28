import React from "react";

export const OurPhilosophy = ({ data }: any) => {
  const ourPhilosophy = data?.data?.attributes?.OurPhilosophy;

  return (
    <div className="container m-auto text-center py-14 w-[70%] phone:w-full phone:px-4 philosophy">
      <h2 className="sectionTitle text44">{ourPhilosophy?.SectionTitle}</h2>
      <p className="text64 font-bold">{ourPhilosophy?.Description}</p>
    </div>
  );
};
