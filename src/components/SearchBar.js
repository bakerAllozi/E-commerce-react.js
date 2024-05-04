import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { usePosts } from "../contexts/HomepageContexts";

function SearchBar() {
  // const { searchWorld, setSearchWorld } = usePosts();

  // const handelSearchChange = (e) => {
  //   setSearchWorld(e.target.value);
  // };
  return (
    <div className=" w-64  relative ">
      <input
        class="  active:text-stone-950  focus:outline-none  text-sm   w-full  h-9  px-2 pr-14   bg-slate-100  rounded-md"
        type="text"
        placeholder="What are you looking for?"
        // value={searchWorld}
        // onChange={(e) => handelSearchChange(e)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className=" absolute z-10 right-4 top-3"
      />
    </div>
  );
}

export default SearchBar;
