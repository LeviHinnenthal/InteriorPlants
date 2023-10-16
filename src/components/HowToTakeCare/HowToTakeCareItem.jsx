import React from "react";
import { careList } from "../../data";

const HowToTakeCareItem = () => {
  return (
    <div>
      {careList.map((careListItem, i) => (
        <div key={i} className="flex my-2 md:max-w-[30vw]">
          <div className="right">
            <img src={careListItem.img} alt="Service Icon" className="max-w-none w-10" />
          </div>
          <div className="left flex flex-col items-start ml-4">
            <p className="text-md font-bold mb-1">{careListItem.title}</p>
            <p className="font-light text-left text-xs text-[#828282]">
              {careListItem.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowToTakeCareItem;
