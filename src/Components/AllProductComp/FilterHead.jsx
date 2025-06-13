
const FilterHead = (filterData) => {
  const FilterDataSorting = (e)=>{
    console.log(filterData);
    
  }
  return (
    <div className='filter_head_content'>
        <h3>Filters</h3>
        <select onChange={(e)=>FilterDataSorting(e.target.value)}>
            <option value="">Sort by : Recommended </option>
            <option value="A to Z">A to Z</option>
            <option value="Z to A">Z to A</option>
            <option value="Low To High">Low To High</option>
            <option value="High To Low">High To Low</option>
        </select>
    </div>
  )
}

export default FilterHead