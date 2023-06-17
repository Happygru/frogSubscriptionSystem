import { Link } from "react-router-dom";

const ABLMenuItem = ({ href = "", label, icon, selected }) => {
  return (
    <Link
      to={href}
      className={`${
        selected
          ? "bg-[rgba(0,213,251,0.8)] hover:bg-[rgba(0,213,251,1)]"
          : "hover:bg-[rgba(255,255,255,0.1)]"
      } index-4 mt-2 flex items-center gap-4 rounded-lg p-2 pl-6 transition`}
    >
      <span className="text-base font-bold text-white">{icon}</span>
      <span className="text-base font-bold text-white">{label}</span>
    </Link>
  );
};

export default ABLMenuItem;
