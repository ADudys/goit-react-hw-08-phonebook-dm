import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { getFilter } from 'redux-slices/selectors';
import { setFilter } from 'redux-slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div className={css.filter}>
      <input
        type="text"
        name="filter"
        className={css.filter__input}
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
        placeholder="Enter value"
      />
    </div>
  );
};
