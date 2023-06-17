import { IconButton } from "@material-tailwind/react";
import { HiOutlineDuplicate, HiExternalLink } from "react-icons/hi";

const ABLTemplateCard = ({ title, useCount, month, publishUrl }) => {
  return (
    <div className="h-[250px] w-full tablet:w-[250px]">
      <div className="gradient-border-solid relative flex h-full w-full flex-col items-center justify-between gap-1 bg-[rgba(70,70,70,0.4)] p-2 transition-all">
        <div className="flex w-full justify-between border-b border-b-[#00D5FB]">
          <div>
            <IconButton variant="text">
              <HiOutlineDuplicate className="text-2xl text-white" />
            </IconButton>
          </div>
          <div>
            <IconButton variant="text">
              <HiExternalLink className="text-2xl text-white" />
            </IconButton>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
        <div className="flex w-full gap-3 pl-2 pb-1">
          <div>
            <p className="text-base text-gray-600">Run 3.1k times</p>
            <p className="text-sm text-gray-600">Created 4 mths ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABLTemplateCard;
