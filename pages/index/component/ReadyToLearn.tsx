import React from "react";

export const ReadyToLearn = () => {
  return (
    <div className="about-wrap relative container rounded-[20px] w-[80%] text-center z-50 tablet:w-full tablet:px-5 tablet:mt-10 phone:w-full phone:px-4">
      <div className="aboutBackground">
        <div className="py-[52px] px-[100px] phone:px-4 tablet:px-10">
          <p className="text64 font-bold text-white parag">
            Hey! You Are At The Right Spot.. Lets Work Together & Explode Your
            Sales – Bazooka Style!!
          </p>
          <div className="pt-10">
            <button className="bg-white h-[70px] px-[40px] text24 font-bold rounded-[7px] phone:w-auto phone:px-[40px]">
              <span className="heroButtonGradient text24">
                {`Ready to learn how?!”`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
