import FilterSearch from "./FilterSearch";
import FilterStatus from "./FilterStatus";

function Filter(props) {
  return (
    <div className="mt-4 d-flex">
      <FilterSearch />
      <FilterStatus />
    </div>
  );
}

export default Filter;
