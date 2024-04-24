import Dashboard from "../components/Dashboard/Dashboard";
import RecommendedBooks from "../components/Dashboard/RecommendedBooks/RecommendedBooks";
import AddBookFilter from "../components/Filters/AddBookFilter";
import MyLibraryBooks from "../components/MyLibraryBooks/MyLibraryBooks";

const Library = () => {
  return (
    <>
      <Dashboard>
        <AddBookFilter />
        <RecommendedBooks />
      </Dashboard>
      <MyLibraryBooks />
    </>
  );
};

export default Library;
