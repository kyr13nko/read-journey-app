import Dashboard from "../components/Dashboard/Dashboard";

import RecommendedFilter from "../components/Filters/RecommendedFilter";
import Workout from "../components/Dashboard/Workout/Workout";
import Quote from "../components/Dashboard/Quote/Quote";

import RecommendedBooks from "../components/RecommendedBooks/RecommendedBooks";

const Recommended = () => {
  return (
    <>
      <Dashboard>
        <RecommendedFilter />
        <Workout />
        <Quote />
      </Dashboard>
      <RecommendedBooks />
    </>
  );
};

export default Recommended;
