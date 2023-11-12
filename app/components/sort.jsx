const SortCities = ({ onSortChange }) => {
  return (
    <select
      className="select select-primary w-full max-w-xs"
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option selected value="+name">
        Alphabetically
      </option>
      <option value="-population">By Population (Descending)</option>
      <option value="+population">By Population (Ascending)</option>
    </select>
  );
};

export default SortCities;
