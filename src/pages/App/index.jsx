import ABLNewCard from "@/Components/ABLNewCard";
import ABLOldCard from "@/Components/ABLOldCard";

const Home = () => {
  return (
    <div className="flex w-full flex-wrap gap-4">
      <ABLNewCard />
      <ABLOldCard />
    </div>
  );
};

export default Home;
