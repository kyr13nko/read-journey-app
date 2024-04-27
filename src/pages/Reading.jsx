import Dashboard from "../components/Dashboard/Dashboard";
import Progress from "../components/Dashboard/Progress/Progress";
import ReadingFilter from "../components/Filters/ReadingFilter";
import MyBook from "../components/MyBook/MyBook";

const Reading = () => {
  return (
    <>
      <Dashboard>
        <ReadingFilter />
        <Progress />
      </Dashboard>
      <MyBook />
    </>
  );
};

export default Reading;
