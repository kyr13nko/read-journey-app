import Dashboard from "../components/Dashboard/Dashboard";
import AddBookFilter from "../components/Filters/AddBookFilter";
import MyLibraryBooks from "../components/MyLibraryBooks/MyLibraryBooks";

const Library = () => {
  return (
    <>
      <Dashboard>
        <AddBookFilter />
      </Dashboard>
      <MyLibraryBooks />
    </>
  );
};

export default Library;
