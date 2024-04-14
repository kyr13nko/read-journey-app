import Dashboard from "../../components/Dashboard/Dashboard";
import Workout from "../../components/Dashboard/Workout/Workout";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks";

const Recommended = () => {
  return (
    <>
      <Dashboard>
        <Workout />
      </Dashboard>
      <RecommendedBooks />
    </>
  );
};

export default Recommended;
