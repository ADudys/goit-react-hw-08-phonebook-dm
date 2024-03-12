import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'store/filter/filterSlice';
import Input from 'style/Input';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div className={css.filter}>
      <Input
        type="text"
        name="filter"
        onChange={e => handleChange(e)}
        placeholder="Enter value"
      />
    </div>
  );
};
