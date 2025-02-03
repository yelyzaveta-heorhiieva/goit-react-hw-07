import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css"
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleFilterChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  }

     
  return (
        <>
        <label className={s.label}>Find contacts by name
          <input className={s.input} type="text" name="search" value={filter} onChange={handleFilterChange} />
        </label>
        </>
  )
}

export default SearchBox
