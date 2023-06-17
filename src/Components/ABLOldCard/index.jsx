import { IconButton } from "@material-tailwind/react";
import {
  HiOutlineDuplicate,
  HiOutlinePencil,
  HiOutlineTrash,
  HiExternalLink,
} from "react-icons/hi";

const ABLOldCard = () => {
  return (
    <div className="h-[250px] w-full tablet:w-[250px]">
      <div className="gradient-border-solid relative flex h-full w-full flex-col items-center justify-between gap-1 bg-[rgba(0,0,0,0.2)] p-2 transition-all">
        <div className="flex w-full justify-between border-b border-b-[#00D5FB]">
          <div>
            <IconButton variant="text">
              <HiOutlineDuplicate className="text-2xl text-white" />
            </IconButton>
          </div>
          <div>
            <IconButton variant="text">
              <HiOutlinePencil className="text-2xl text-white" />
            </IconButton>
            <IconButton variant="text">
              <HiExternalLink className="text-2xl text-white" />
            </IconButton>
            <IconButton variant="text">
              <HiOutlineTrash className="text-2xl text-white" />
            </IconButton>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">My Birthday</h1>
        </div>
        <div className="flex w-full gap-3 pl-2 pb-1">
          <div className="w-max rounded-full border bg-transparent p-[5px_12px] text-2xl font-black text-gray-600">
            H
          </div>
          <div>
            <p className="text-base text-gray-600">Happygru</p>
            <p className="text-sm text-gray-600">14 minutes ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABLOldCard;
