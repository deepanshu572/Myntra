const FilterHead = ({sortingDataFnc}) => {
  const FilterDataSorting = (e) => {
    sortingDataFnc(e.target.value)
  };
  return (
    <div className="filter_head_content">
      <h3>Filters</h3>
      <select onChange={FilterDataSorting}>
        <option value="Recomendation">Sort by : Recomendation </option>
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
        <option value="Low To High">Low To High</option>
        <option value="High To Low">High To Low</option>
      </select>
    </div>
  );
};

export default FilterHead;
