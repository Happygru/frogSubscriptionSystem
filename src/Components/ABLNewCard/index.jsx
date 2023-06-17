import ABLButton from "../ABLButton";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { HiOutlineEye, HiPlusSm } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const ABLNewCard = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[250px] w-full tablet:w-[250px]">
      <div className="gradient-border-dashed relative flex h-full w-full items-center justify-center transition-all">
        <Tooltip content="See the template">
          <IconButton
            className="!absolute right-[10px] top-[10px] outline-0"
            variant="text"
            onClick={() => navigate("/templates")}
          >
            <HiOutlineEye className="text-2xl text-white" />
          </IconButton>
        </Tooltip>
        <ABLButton
          className="flex items-center gap-2 bg-[rgba(0,213,251,0.8)] hover:scale-105"
          onClick={() => navigate("/newapp")}
        >
          <HiPlusSm className="text-3xl font-black" />
          <span className="text-base">New Chat</span>
        </ABLButton>
      </div>
    </div>
  );
};

export default ABLNewCard;
