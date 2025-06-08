
const FilterHead = () => {
  return (
    <div className='filter_head_content'>
        <h3>Filters</h3>
        <select>
            <option value="">Sort by : Recommended </option>
            <option value="">A to Z</option>
            <option value="">Z to A</option>
            <option value="">Low To High</option>
            <option value="">High To Low</option>
        </select>
    </div>
  )
}

export default FilterHead