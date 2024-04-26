import Dashboard from "../components/Dashboard/Dashboard";
import Progress from "../components/Dashboard/Progress/Progress";
import ReadingFilter from "../components/Filters/ReadingFilter";

const Reading = () => {
  return (
    <>
      <Dashboard>
        <ReadingFilter />
        <Progress />
      </Dashboard>
    </>
  );
};

export default Reading;
