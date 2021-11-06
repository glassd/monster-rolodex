import './SearchBox.style.css';

export const SearchBox = ({ placeHolder, handleChange }) => (
    <input className='search' type='search' placeholder={placeHolder} onChange={handleChange} />
)